import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, Control, ControlGroup, FormBuilder, Validators } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'auth-login',
  templateUrl: 'app/auth/login/login.html',
  styleUrls: ['app/auth/login/login.css'],
  directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES ]
})
export class LoginComponent implements OnInit {
  
  active = true;
  email: Control;
  password: Control;
  loginForm: ControlGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.email = new Control('', Validators.required);
    this.password = new Control('', Validators.compose([Validators.required, Validators.minLength(6)]));
    this.loginForm = this.fb.group({
      email: this.email,
      password: this.password
    });
  }
  
  onSubmit() {
    console.log(this.loginForm.value);
  }
}