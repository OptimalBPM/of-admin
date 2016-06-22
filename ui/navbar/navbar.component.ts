import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'bpm-navbar',
  templateUrl: 'admin/navbar/navbar.html',
  directives: [ ROUTER_DIRECTIVES ]
})
export class NavbarComponent {
//TODO:: import list of menus to show from the hook_wrapper.ts
}
