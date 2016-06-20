import 'zone.js';
import 'reflect-metadata';
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
//TODO:: once correct hook wrapper is generated import from hook_wrapper
import { AppComponent } from './app.component';
//TODO:: once correct hook wrapper is generated import from hook_wrapper
import { APP_ROUTER_PROVIDERS }from './app.routes'; 

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS
]).catch(err => console.error(err));
