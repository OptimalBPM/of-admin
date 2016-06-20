import { ROUTER_DIRECTIVES } from '@angular/router';
import { AuthRoutes } from './app/index';
import { DashBoardRoutes } from './app/index';
import { NavbarComponent } from './app/index';

/*
 * Export angular functionality directives,components, services e.t.c
 * This are components that are not part of any other component within the plugin
 * and are going to be available in global scope of the app.
 */
export const pluginStructure = [
    ROUTER_DIRECTIVES,
    NavbarComponent
];
/*
 * Export your available routes. Note components that are routes should be excluded from above structure e.t.c
 * Angular2 uses a component router hence this components will already be imported when defining routes
 */
export const pluginRoutes = [
    ...AuthRoutes,
    ...DashBoardRoutes
];
/*
 * Export menus that should be made available in admin. Note two types supported main & dropdown. Dropdown
 * menu ideally appears in settings menu dropdown on top right corner. Main is append next to last menu 
 * item from left to right.
 *
 * This menu items will simply be iterated over by NavbarComponent that is responsible for displaying menus
 */
export const pluginMenus = [
    {
        display: 'Home',
        path: 'home',
        type: 'main'
    },
    {
        display: 'Login',
        path: 'login',
        type: 'main'
    },
    {
        display: 'Register',
        path: 'register',
        type: 'main'
    }
];