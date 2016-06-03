import { Component } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';

@Component({
  selector: 'auth-register',
  templateUrl: 'app/auth/register/register.html',
  styleUrls: [ 'app/auth/register/register.sass' ],
  directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES ]
})
export class RegisterComponent {

  public model: any = {};
  // Reset the form with a new hero AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (angular issue #6822)
  active = true;

  onSubmit() { console.log('clicked') }
}