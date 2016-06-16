import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, Control, ControlGroup, FormBuilder, Validators } from '@angular/common';

@Component({
  selector: 'auth-email-reset',
  templateUrl: 'app/auth/email-reset/email-reset.html',
  styleUrls: [ 'app/auth/email-reset/email-reset.css' ],
  directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES ]
})
export class EmailResetComponent implements OnInit {

  // Reset the form with a new hero AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (angular issue #6822)
  active:boolean = true;
  email: Control;
  resetForm: ControlGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.email = new Control('', Validators.required);
    this.resetForm = this.fb.group({
      email: this.email,
    });
  }

  onSubmit() { 
    console.log(this.resetForm.value); 
  }
}