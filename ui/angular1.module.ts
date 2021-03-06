///<reference path="./typings/index.d.ts" />

import "angular";
import "angular-cookies";
import "angular-touch";
import "angular-sanitize";
import "angular-animate";
//import "angular-schema-form";
import "angular-schema-form-bootstrap";
import "bootstrap3-dialog";
// import "font-awesome"; TODO:: uncomment later, currently imported by systemjs incorrectly

// Load the server side hooks declarations
import { hook_initFramework } from "/admin/hook_wrapper";
import { upgradeAdapter } from "/admin/upgrade.adapter";
import { AppComponent } from "./app.component";

export function InitAngular1() {
	console.log("Init Angular 1 code.")
	// Angular 1 dependencies module
	let app: any = angular.module("mainApp", [
		"ngAnimate",
		"ngSanitize",
		"ngTouch",
		"ngCookies",
		"ngAnimate",
		"mgcrea.ngStrap",
		"ui.tree",
		"ui.ace",
		"schemaForm"
	]);

	app.run(['$rootScope', function($rootScope ) {
		$rootScope.BootstrapDialog = (window as any).BootstrapDialog;
	}]);

	app.directive('ofApp', upgradeAdapter.downgradeNg2Component(AppComponent));
	// Call the init framework hook
	hook_initFramework(app);
}
