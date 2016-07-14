"""
The admin module holds the CherryPy implementation of the admin interface.
Note that most of its initialisation happens in the broker init script, ../broker.py
"""
import copy
import os
import threading

import cherrypy
import json

from of.broker.cherrypy_api.node import aop_check_session

from of.schemas.constants import id_right_admin_everything
from of.common.security.groups import aop_has_right
from of.common.logging import write_to_log, EC_SERVICE, SEV_DEBUG, EC_NOTIFICATION, SEV_ERROR
from of.common.messaging.utils import get_environment_data

class CherryPyAdmin(object):
    """
    The CherryPyAdmin class is a plugin for CherryPy that shows the admin UI for the Optimal Framework
    """

    #: Plugin management
    plugins = None

    #: A reference to the stop broker function in the main thread
    stop_broker = None

    #: A reference to root object (broker)
    root = None

    #: A init string for the client
    admin_ui_init = None

    #: A init string for SystemJS
    admin_systemjs_init = None

    def __init__(self, _process_id, _address, _stop_broker, _root_object,
                 _plugins, _web_config):
        write_to_log(_category=EC_SERVICE, _severity=SEV_DEBUG, _process_id=_process_id,
                     _data="Initializing administrative REST API.")

        self.stop_broker = _stop_broker

        self.process_id = _process_id
        self.address = _address

        self.root = _root_object
        self.plugins = _plugins

        # Mount the static content at a mount point /admin
        _web_config.update({
            "/admin" : {
                "tools.staticdir.on": True,
                "tools.staticdir.dir": os.path.join(os.path.dirname(__file__), "../ui"),
                "tools.trailing_slash.on": True
            }
        })


        self.refresh_static(_web_config=_web_config)

    def broker_ctrl(self, _command, _reason, _user):
        """
        Controls the broker's running state

        :param _command: Can be "stop" or "restart".
        :param _user: A user instance
        """
        write_to_log("broker.broker_control: Got the command " + str(_command), _category=EC_SERVICE,
                     _process_id=self.process_id)

        # TODO: There should be a log item written with reason and userid.(PROD-32)
        # TODO: UserId should also be appended to reason below.(PROD-32)

        def _command_local(_local_command):

            if _local_command == "restart":
                self.stop_broker(_reason=_reason, _restart=True)
            if _local_command == "stop":
                self.stop_broker(_reason=_reason, _restart=False)

        _restart_thread = threading.Thread(target=_command_local, args=[_command])
        _restart_thread.start()

        return {}

    @cherrypy.expose
    @cherrypy.tools.json_in()
    @cherrypy.tools.json_out(content_type='application/json')
    @aop_check_session
    @aop_has_right([id_right_admin_everything])
    def broker_control(self, **kwargs):
        return self.broker_ctrl(cherrypy.request.json["command"],
                                cherrypy.request.json["reason"],
                                kwargs["_user"])

    @cherrypy.expose
    @cherrypy.tools.json_out(content_type='application/json')
    @aop_check_session
    @aop_has_right([id_right_admin_everything])
    def get_peers(self, **kwargs):
        """
        Returns a list of all logged in peers
        :param kwargs: Unused here so far, but injected by get session
        :return: A list of all logged in peers
        """
        # TODO: This should probably not be in admin. However listing peers does seems slightly administrative.
        _result = []
        # Filter out the unserializable web socket
        for _session in self.root.peers.values():
            _new_session = copy.copy(_session)
            _new_session["web_socket"] = "removed for serialization"
            _new_session["queue"] = "removed for serialization"
            _result.append(_new_session)

        write_to_log(_process_id=self.process_id, _category=EC_NOTIFICATION, _severity=SEV_DEBUG,
             _data="Returning a list of peers:" + str(_result))
        return _result


    def refresh_hooks(self):

        # Gather all hooks
        _hooks = []
        for _curr_plugin_key, _curr_plugin in self.plugins.items():
            if "admin-ui" in _curr_plugin:
                _curr_admin_info = _curr_plugin["admin-ui"]
                if "ui-hooks" in _curr_admin_info:
                    _hooks+=_curr_plugin["admin-ui"]["ui-hooks"]

        # TODO: Add check to see what hooks are actually implemented in each plugin by parsing hooks.ts? Simple search check or AST?
        # TODO: At least add check to see if a plugin actually have a hooks.ts? No reason to get errors in the UI.
        _presentation = "// This file is generated by the OF backend and presented as /admin/hooks\n// Defined hooks:\n"
        for _hook in _hooks:
            _presentation+="// " + _hook["name"] + ": " + _hook["description"] + "\n"


        # Generate the imports
        _imports = ""
        _hook_defaults = ["pluginStructure", "pluginRoutes", "pluginMenus"]
        for _curr_plugin_key, _curr_plugin in self.plugins.items():
            for _hook in _hook_defaults:
                _hook_alias = _curr_plugin_key + "_" + _hook
                _imports+="import {" + _hook +" as " + _hook_alias + "} from '" + _curr_plugin["admin-ui"]["mountpoint"] + "/hooks';\n"

        # Join the arrays
        _hook_defs=""
        for _hook in _hook_defaults:
            _curr_hook_def = "export const " + _hook + ": any[] = [];\n"
            for _curr_plugin_key, _curr_plugin in self.plugins.items():
                _hook_alias = _curr_plugin_key + "_" + _hook
                _curr_hook_def += _hook +".push(..." + _hook_alias + ");\n"
            _hook_defs+=_curr_hook_def + "\n\n"

        for _curr_plugin_key, _curr_plugin in self.plugins.items():
            for _hook in _hooks:
                _hook_alias = _curr_plugin_key + "_" + _hook["name"]
                _imports+="import {" + _hook["name"] +" as " + _hook_alias + "} from '" + _curr_plugin["admin-ui"]["mountpoint"] + "/hooks';\n"

        # Generate the hook calls
        for _hook in _hooks:
            _param_list = ", ".join(_hook["parameters"])
            _curr_hook_def = "export function hook_" + _hook["name"] + "(" + _param_list + "){\n"
            for _curr_plugin_key, _curr_plugin in self.plugins.items():
                _hook_alias = _curr_plugin_key + "_" + _hook["name"]
                _curr_hook_def += "        " + _hook_alias + "(" + _param_list + ");\n"
            _hook_defs+=_curr_hook_def + "\n}\n"

        return _presentation + str(_imports) + "\n" + _hook_defs



    def refresh_static(self, _web_config):
        """
        This function regenerates all the static content that is used to initialize the user interface
        plugins.
        :param _web_config: An instance of the CherryPy web configuration
        """



        self.admin_ui_hooks = self.refresh_hooks()

        _imports = ""
        _systemjs = ""
        # has_right(id_right_admin_everything, kwargs["user"])
        for _curr_plugin_key, _curr_plugin_info in self.plugins.items():
            # Add any plugin configuration for the Admin user interface
            if "admin-ui" in _curr_plugin_info:

                _curr_ui_def = _curr_plugin_info["admin-ui"]
                if "mountpoint" not in _curr_ui_def:
                    write_to_log("Error loading admin-ui for " + _curr_plugin_key + " no mount point.",
                                 _category=EC_SERVICE, _severity=SEV_ERROR)
                    continue
                _mount_point = _curr_ui_def["mountpoint"]

                if _mount_point[0] == "/":
                    write_to_log(
                        "Not mounting " + _mount_point + ", cannot mount admin-specific ui under root(root can "
                                                         "never depend on admin), use root-ui instead.",
                        _category=EC_SERVICE, _severity=SEV_ERROR)
                    continue
                # Mount the static content at a mount point somewhere under /admin
                _web_config.update({
                    "/admin/" + _mount_point: {
                        "tools.staticdir.on": True,
                        "tools.staticdir.dir": os.path.join(_curr_plugin_info["baseDirectoryName"], _mount_point),
                        "tools.trailing_slash.on": True
                    }
                })

                _systemjs += "System.config({\"packages\": {\"" + _mount_point + "\": {\"defaultExtension\": \"ts\", \"meta\": {\"*.ts\": {\"loader\": \"ts\"}}}}});\n"

        self.admin_systemjs_init = _systemjs

    @cherrypy.expose(alias="hook_wrapper.ts")
    def hook_wrapper(self, **kwargs):
        return self.admin_ui_hooks

    @cherrypy.expose(alias="admin_jspm_config.js")
    def systemjs(self, **kwargs):
        return self.admin_systemjs_init


    @cherrypy.expose
    @cherrypy.tools.json_out(content_type='application/json')
    @aop_check_session
    @aop_has_right([id_right_admin_everything])
    def get_broker_environment(self, **kwargs):
        write_to_log(_process_id=self.process_id, _category=EC_NOTIFICATION, _severity=SEV_DEBUG, _data="Request for broker information")
        return get_environment_data()