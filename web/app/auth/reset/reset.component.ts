import { Component } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';

@Component({
  selector: 'auth',
  templateUrl: 'app/auth/reset/reset.html',
  styleUrls: [ 'app/auth/reset/reset.sass' ],
  directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES ]
})
export class ResetComponent {

  public model: any = {};
  // Reset the form with a new hero AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (angular issue #6822)
  active = true;

  onSubmit() { console.log('clicked') }
}