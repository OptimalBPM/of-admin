import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from 'auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private router:Router, private authService:AuthService) {
	}

	canActivate(// Not using but worth knowing about
							next:ActivatedRouteSnapshot,
							state:RouterStateSnapshot) {
		// Return true if local storage has auth data.
		if (this.authService.isLoggedIn()) {
			return true;
		}
		this.router.navigateByUrl('/login');
		return false;
	}
}
