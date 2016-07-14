import {Component} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';

let __moduleName:any;

@Component({
	moduleId: __moduleName,
	selector: '[auth-logout]',
	template: '<a (click)="logout()" href="#"><i class="fa fa-sign-out"></i>Logout</a>',
	directives: [ROUTER_DIRECTIVES]
})

export class LogoutComponent {
	constructor(private authService: AuthService, private router: Router) {
	}

	logout() {
		this.authService.logout();
		this.router.navigateByUrl('');
	}
}
