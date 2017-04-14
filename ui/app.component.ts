import {Component, OnInit, ApplicationRef} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {Http} from '@angular/http';
import {pluginStructure} from '/admin/hook_wrapper';

//Router functionality to be moved to main.ts once angular2 is fully adopted.
import {Routes, RouterModule} from '@angular/router';
import {pluginRoutes} from "/admin/hook_wrapper";
import {AuthGuard, AuthService} from './auth/index';
import {Title}  from '@angular/platform-browser';

import {Globals} from "./globals";


const routes: Routes = [
	...pluginRoutes
];



export const APP_ROUTER_PROVIDERS = [
	routes,
	AuthGuard,
	AuthService
];


export const routing = RouterModule.forRoot(APP_ROUTER_PROVIDERS);

@Component({
	selector: 'of-app',
	templateUrl: 'admin/app.html',
	directives: [ROUTER_DIRECTIVES, ...pluginStructure],
	providers: [ // Hybrid requirement TODO:: Track https://github.com/angular/angular/issues/9870
		routing,
		Title,
		Http,
		AuthService,
		{
			provide: ApplicationRef, useValue: {
			componentTypes: [AppComponent], registerDisposeListener: () => {
			}
		}
		},
		{provide: APP_BASE_HREF, useValue: '/admin/index.html'},

	]
})
export class AppComponent {

	loadAppName() {
		// Load the name of the application as set in the broker
		this.http.get("admin/get_application_name")
			.subscribe(
				response => {
					let data = response.json();
					console.log("Application name: ", data["applicationName"]);
					Globals.applicationName = data["applicationName"];

					this.title.setTitle(Globals.applicationName + " - administrator")
				},
				error => {
					console.log("Error loading application name", error);
				}
			);
	}

	constructor(router: Router, private http: Http, private title: Title, authService: AuthService) {
		console.log("Starting the app..");
		this.loadAppName();
		authService.isLoggedIn();
		router.initialNavigation();
	}

}
