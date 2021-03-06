import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, Control, ControlGroup, FormBuilder, Validators } from '@angular/common';

let __moduleName: any; // fully resolved filename; defined at module load time  

@Component({
  moduleId: __moduleName,  
  selector: 'auth-register',
  templateUrl: 'register.html',
  styleUrls: [ 'register.css' ],
  directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES ]
})
export class RegisterComponent implements OnInit {

  model: any = {};
  active = true;
  name: Control;
  email: Control;
  password: Control;
  confirm: Control;
  registerForm: ControlGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.name = new Control('', Validators.required); 
    this.email = new Control('', Validators.required);
    this.password = new Control('', Validators.compose([Validators.required, Validators.minLength(6)]));
    this.confirm = new Control('', Validators.compose([Validators.required, Validators.minLength(6)]));
    
    this.registerForm = this.fb.group({
      name: this.name,
      email: this.email,
      password: this.password,
      confirm: this.confirm
    });
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }
}
