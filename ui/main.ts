import "zone.js";
import 'reflect-metadata';

console.log("-2");

import {bootstrap}    from '@angular/platform-browser-dynamic';
import {APP_BASE_HREF} from '@angular/common';
import {HttpModule} from '@angular/http';
import {provideRouter, RouterConfig} from '@angular/router';
import {disableDeprecatedForms, provideForms} from '@angular/forms';





/*
 Necessary to run both angular 1.x code along side angular 2 code
 */

console.log("-1");
import {upgradeAdapter} from './upgrade.adapter';
console.assert(upgradeAdapter, "Uhoh, upgradeAdapter was not defined, likely part of a circular reference loop");
console.log("0");
//Angular 1 modules and packages
import {InitAngular1} from './angular1.module';

// //Initialize angular1
console.log("1");
InitAngular1();
console.log("2");
//Bootstrap using ng-upgrade for hybrid 1&2
upgradeAdapter.downgradeNg2Provider(HttpModule);
upgradeAdapter.downgradeNg2Provider({provide: APP_BASE_HREF, useValue: '/admin/index.html'});
console.log("Bootstrapping mainApp");
upgradeAdapter.bootstrap(document.body, ['mainApp']).ready(function () {
    console.log("Done bootstrapping mainApp");
    });

// Angular2 only bootstrap
// bootstrap(AppComponent, [
//     APP_ROUTER_PROVIDERS,
//     HTTP_PROVIDERS,
//     {provide: APP_BASE_HREF, useValue: '/admin/index.html'}
// ]).catch(err => console.error(err));
