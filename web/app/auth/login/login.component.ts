import { Component } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'auth-login',
  templateUrl: 'app/auth/login/login.html',
  styleUrls: ['app/auth/login/login.sass'],
  directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES ]
})
export class LoginComponent {

  public model: any = {};
  // Reset the form with a new hero AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (angular issue #6822)
  active = true;

  onSubmit() { console.log('clicked') }
}