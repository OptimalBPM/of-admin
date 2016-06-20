from .admin import Admin

def init_web(_broker_scope):
    _broker_scope["web_root"].admin1 = Admin()