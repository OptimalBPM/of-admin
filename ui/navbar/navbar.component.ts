import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { pluginMenus } from '/admin/hook_wrapper';

let __moduleName: any; // fully resolved filename; defined at module load time  

@Component({
  moduleId: __moduleName, 
  selector: 'bpm-navbar',
  templateUrl: 'navbar.html',
  directives: [ ROUTER_DIRECTIVES ]
})
export class NavbarComponent implements OnInit{
  menus: any;
  isLoggedIn: boolean = localStorage.getItem('X-Auth-Session-ID');

  ngOnInit() {
    console.log(pluginMenus);
    this.menus = pluginMenus;
  }
}
