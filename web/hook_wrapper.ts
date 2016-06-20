// Required angular imports.
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, provideRouter, RouterConfig } from '@angular/router';

/*-------------------- Routes -------------------------*/
// A loop that imports plugin routes from all available hook files
import {pluginRoutes as plugin1, pluginMenus} from "./hook";
// import { pluginRoutes as plugin2 } from "./hook2";
// e.t.c
const routes: RouterConfig = [
    ...plugin1,
    // ...plugin2,
    // ...plugin3,
    // e.t.c
];

// Creates an angular routes service
export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
/*-------------------- End Routes -------------------------*/

/*-------------------- Main Component -------------------------*/
// Also needs to loop through available plugins.
import { pluginStructure as structure1 } from "./hook";
export { pluginMenus as menus1 } from "./hook";

export const pluginMenus = [
    ...menus1,
    // ...menus2
    // //e.t.c    
];

@Component({
    selector: 'of-admin',
    templateUrl: 'app.html',
    directives: [
        ...structure1, 
        // ...structure2,
        // e.t.c
    ]
})
export class AppComponent {}
/*-------------------- End Main Component -------------------------*/
