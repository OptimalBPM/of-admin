import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';

@Component({
  selector: 'auth-register',
  templateUrl: 'app/auth/register/register.html',
  styleUrls: [ 'app/auth/register/register.sass' ],
  directives: [ CORE_DIRECTIVES ]
})
export class RegisterComponent {}