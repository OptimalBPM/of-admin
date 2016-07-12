///<reference path="./typings/index.d.ts" />

import "angular";
import "angular-cookies";
import "angular-touch";
import "angular-sanitize";
import "angular-animate";
import "angular-schema-form";
import "angular-schema-form-bootstrap";
import "bootstrap3-dialog";
// import "font-awesome"; TODO:: uncomment currently imported by systemjs incorrectly

import { hook_initFramework } from "/admin/hook_wrapper";

export function InitAngular1() {
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

	// Call the init framework hook
	hook_initFramework(app);
}
