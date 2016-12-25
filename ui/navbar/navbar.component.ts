import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { pluginMenus } from '/admin/hook_wrapper';
import { AuthService, LogoutComponent} from '../auth/index';
import {Globals} from "../globals";



let __moduleName: any; // fully resolved filename; defined at module load time

@Component({
  moduleId: __moduleName,
  selector: 'of-navbar',
  templateUrl: 'navbar.html',
  directives: [ ROUTER_DIRECTIVES, LogoutComponent]
})
export class NavbarComponent implements OnInit{
  menus: any;
  globals : any;
  AuthService : any;


	constructor(private authService: AuthService){
		console.log("Init navbar");
		this.AuthService = AuthService;
		this.globals = Globals;

	}

  ngOnInit() {
    this.menus = pluginMenus;
  }
}
