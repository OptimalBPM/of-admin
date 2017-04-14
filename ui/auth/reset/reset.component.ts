import 'reflect-metadata';
import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, Control, ControlGroup, FormBuilder, Validators } from '@angular/common';

let __moduleName: any; // fully resolved filename; defined at module load time

@Component({
  moduleId: __moduleName,
  selector: 'auth',
  templateUrl: 'reset.html',
  styleUrls: [ 'reset.css' ],
  directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES ]
})
export class ResetComponent implements OnInit {

  active = true;
  email: Control;
  password: Control;
  confirm: Control;
  resetForm: ControlGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {

    this.email = new Control('', Validators.required);
    this.password = new Control('', Validators.compose([Validators.required, Validators.minLength(6)]));
    this.confirm = new Control('', Validators.compose([Validators.required, Validators.minLength(6)]));

    this.resetForm = this.fb.group({
      email: this.email,
      password: this.password,
      confirm: this.confirm
    });
  }

  onSubmit() {
    console.log(this.resetForm.value);
  }
}


