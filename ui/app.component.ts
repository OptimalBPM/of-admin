import { Component, OnInit, ApplicationRef } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { pluginStructure } from '/admin/hook_wrapper';

//Router functinality to be moved to main.ts once angular2 is fully adopted.
import { provideRouter, RouterConfig } from '@angular/router';
import { pluginRoutes } from "/admin/hook_wrapper";
import { AuthGuard, AuthService } from './auth/index';
const routes: RouterConfig = [
    ...pluginRoutes
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
    AuthGuard,
		AuthService
];

@Component({
    selector: 'bpm-app',
    templateUrl: 'admin/app.html',
    directives: [ ROUTER_DIRECTIVES, ...pluginStructure ],
		providers: [ // Hybrid requirement TODO:: Track https://github.com/angular/angular/issues/9870
			 APP_ROUTER_PROVIDERS,
			 {
				 provide: ApplicationRef, useValue: { componentTypes: [AppComponent], registerDisposeListener: () => {}	}
			 },
			 { provide: APP_BASE_HREF, useValue: '/admin/index.html'},
		]
})
export class AppComponent {
	  constructor(router: Router) {
    	router['initialNavigation'](); // Needed to use component router in hybrid angular 1.x and angular 2
  	}
}
