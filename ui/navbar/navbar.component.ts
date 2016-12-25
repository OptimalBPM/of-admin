import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { pluginMenus } from '/admin/hook_wrapper';
import { AuthService, LogoutComponent} from '../auth/index';

let __moduleName: any; // fully resolved filename; defined at module load time

@Component({
  moduleId: __moduleName,
  selector: 'of-navbar',
  templateUrl: 'navbar.html',
  directives: [ ROUTER_DIRECTIVES, LogoutComponent]
})
export class NavbarComponent implements OnInit{
  menus: any;
  isLoggedIn: boolean;

	constructor(authService: AuthService){
		this.isLoggedIn = authService.isLoggedIn();
	}

	get_application_name() {
		return "Optimal Framework";
	}

  ngOnInit() {
    this.menus = pluginMenus;
  }
}
