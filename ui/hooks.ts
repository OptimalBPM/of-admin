import {AboutRoutes} from './about/index';
import {AdminRoutes} from './admin/index';
import {AuthRoutes} from './auth/index';
import {DashBoardRoutes} from './dashboard/index';
import {NavbarComponent} from './navbar/index';
import {AppComponent} from './app.component';

//Angular 1 Directives imports
import {nodesDirective} from './nodes/index';
import {schemaTreeDirective} from './schema_tree/index';
/*
 * Export angular functionality directives,components, services e.t.c
 * This are components that are not part of any other component within the plugin
 * and are going to be available in global scope of the app.
 */
export const pluginStructure = [
	NavbarComponent
];
/*
 * Export your available routes. Note components that are routes should be excluded from above structure e.t.c
 * Angular2 uses a component router hence this components will already be imported when defining routes
 */
export const pluginRoutes = [
	...AboutRoutes,
	...AdminRoutes,
	...AuthRoutes,
	...DashBoardRoutes
];
/*
 * Export menus that should be made available in admin. Note two types supported right, left, & dropdown. Dropdown
 * menu ideally appears in settings menu dropdown on top right corner. Main is append next to last menu
 * item from left to right.
 *
 * This menu items will simply be iterated over by NavbarComponent that is responsible for displaying menus
 */
export const pluginMenus = [
	{
		display: 'HOME',
		path: '',
		type: 'left'
	},
	{
		display: 'ABOUT',
		path: '/about',
		type: 'left'
	},
	{
		display: 'ADMINISTER',
		path: '/admin',
		type: 'left'
	},
	{
		display: 'Login',
		path: '/login',
		type: 'right',
		showWhenNotLoggedIn: false
	},
	{
		display: 'Register',
		path: '/register',
		type: 'right',
		showWhenNotLoggedIn: false
	}
];

export function initFramework(app:any) {
	app.component('bpmNodes', nodesDirective);
	app.component('bpmSchemaTree', schemaTreeDirective);

	app.directive("bpmRightClick", function ($parse) {
		return function (scope, element, attrs) {
			var fn: any = $parse(attrs.bpmRightClick);
			element.bind('contextmenu', function (event) {
				scope.$apply(function () {
					event.preventDefault();
					fn(scope, { $event: event });
				});
			});
    };
	});

	app.directive("bpmAfterRepeat", function () {
		// Do what is specified in "bpm-after-repeat" after a repeat is done.
		return function (scope, element, attrs) {
			if (scope.$last) {
				angular.element(element).scope().$eval(attrs.bpmAfterRepeat);
			}
		};
	});
	console.log("initFramework for OF Admin was run");
}
