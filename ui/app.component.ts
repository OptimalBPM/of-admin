import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { pluginStructure } from "/admin/hooks.ts";

@Component({
    selector: 'bpm-app',
    templateUrl: 'admin/app.html',
    directives: [ ROUTER_DIRECTIVES, ...pluginStructure ]
})
export class AppComponent {}
