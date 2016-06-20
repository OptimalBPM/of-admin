import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { NavbarComponent } from "./navbar/index";

@Component({
    selector: 'bpm-app',
    templateUrl: 'app/app.html',
    directives: [ ROUTER_DIRECTIVES, NavbarComponent ]
})
export class AppComponent {}
