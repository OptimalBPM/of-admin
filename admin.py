# import the cherrypy library
import cherrypy

class Admin()(object):

    # This example doesn't take any data, it just returns the hello-string.
    @cherrypy.expose
    def hello(self, **kwargs):
        return "Hello, from Admin."