import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { pluginMenus } from '/admin/hook_wrapper';

@Component({
  selector: 'bpm-navbar',
  templateUrl: 'admin/navbar/navbar.html',
  directives: [ ROUTER_DIRECTIVES ]
})
export class NavbarComponent implements OnInit{
  menus: any;

  ngOnInit() {
    console.log(pluginMenus);
    this.menus = pluginMenus;
  }
}
