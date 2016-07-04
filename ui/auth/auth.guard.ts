import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {}

  canActivate(
    // Not using but worth knowing about
    next:  ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    // Return true if local storage has auth data.  
    if (localStorage.getItem('X-Auth-Session-ID')) {
        return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }
}