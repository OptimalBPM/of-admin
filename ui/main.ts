import 'zone.js';
import 'reflect-metadata';
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { APP_BASE_HREF } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent } from './app.component';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { AuthGuard } from './auth/index';

import { pluginRoutes } from "/admin/hook_wrapper.ts";
// import { pluginRoutes } from '/admin/hooks.ts';

const routes: RouterConfig = [
    ...pluginRoutes
];

const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
    AuthGuard
];

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    {provide: APP_BASE_HREF, useValue: '/admin/index.html'}
]).catch(err => console.error(err));
