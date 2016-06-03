import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';

@Component({
  selector: 'auth-login',
  templateUrl: 'app/auth/login/login.html',
  styleUrls: ['app/auth/login/login.css'],
  directives: [ CORE_DIRECTIVES ]
})
export class LoginComponent {}