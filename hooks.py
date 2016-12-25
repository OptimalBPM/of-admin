"""
This module contains the Optimal Framework-hooks of the administrative interface server-side functionality
These hooks are called at different stages.

Created on Jun 22, 2016

@author: Nicklas Boerjesson
"""
import os
from .lib.admin import CherryPyAdmin


def init_web(_broker_scope):
    # Initialize admin user interface /admin
    _broker_scope["web_root"].admin = CherryPyAdmin(_process_id=_broker_scope["web_root"].process_id,
                                                    _address=_broker_scope["address"],
                                                    _stop_broker=_broker_scope["stop_broker"],
                                                    _root_object=_broker_scope["web_root"],
                                                    _web_config=_broker_scope["web_config"],
                                                    _plugins=_broker_scope["plugins"].plugins)

    # Call our own hooks
    _broker_scope["plugins"].call_hook("after_admin_ui", _broker_scope=_broker_scope,
                                       _admin_object=_broker_scope["web_root"].admin)


def post_web_init(_broker_scope):
    # Set all things only if no others have

    if _broker_scope["application_name"] is None:
        # If no other have set the applicaton name, consider it a bare bones installation.
        _broker_scope["web_root"].admin.application_name = "Optimal Framework"
    else:
        _broker_scope["web_root"].admin.application_name = _broker_scope["web_root"].application_name

    _web_config = _broker_scope["web_config"]
    # Only if no other plugin have changed the default page, add our own.
    if "/" in _web_config and _web_config["/"]["tools.staticdir.dir"] == "ui" and _web_config["/"][
        "tools.staticdir.index"] == "index.html":
        # The UI root
        _web_config.update({
            "/": {
                "tools.staticdir.on": True,
                "tools.staticdir.dir": os.path.join(os.path.dirname(__file__), "root"),
                "tools.trailing_slash.on": True,
                "tools.staticdir.index": "index.html",
            }
        }
        )
