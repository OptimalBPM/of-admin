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
/*
Necessary to run both angular 1.x code along side angular 2 code
*/
import { upgradeAdapter } from './upgrade.adapter';

//Angular 1 modules and packages
import { InitAngular1 } from './angular1.module';

const routes: RouterConfig = [
    ...pluginRoutes
];

const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
    AuthGuard
];

//Initialize angular1
InitAngular1();

//Bootstrap using ng-upgrade for hybrid 1&2
upgradeAdapter.bootstrap(document.body, ['mainApp']);
upgradeAdapter.addProvider(APP_ROUTER_PROVIDERS);
upgradeAdapter.addProvider(HTTP_PROVIDERS);
upgradeAdapter.addProvider({provide: APP_BASE_HREF, useValue: '/admin/index.html'});


/* Angular2 only bootstrap
bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    {provide: APP_BASE_HREF, useValue: '/admin/index.html'}
]).catch(err => console.error(err));
*/
