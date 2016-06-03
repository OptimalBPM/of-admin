import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'bpm-navbar',
  templateUrl: 'app/navbar/navbar.html',
  directives: [ ROUTER_DIRECTIVES ]
})
export class NavbarComponent {}