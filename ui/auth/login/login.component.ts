import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, Control, ControlGroup, FormBuilder, Validators} from '@angular/common';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {Headers, RequestOptions, Http} from '@angular/http';
import {AuthService} from 'auth/auth.service';

let __moduleName:any; // fully resolved filename; defined at module load time

@Component({
	moduleId: __moduleName,
	selector: 'auth-login',
	templateUrl: 'login.html',
	styleUrls: ['login.css'],
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class LoginComponent implements OnInit {

	active = true;
	username:Control;
	password:Control;
	loginForm:ControlGroup;

	constructor(private fb:FormBuilder, private http:Http, private router:Router, private authService:AuthService) {
	}

	ngOnInit() {
		this.username = new Control('', Validators.required);
		this.password = new Control('', Validators.compose([Validators.required, Validators.minLength(3)]));
		this.loginForm = this.fb.group({
			username: this.username,
			password: this.password
		});
	}

	onSubmit() {
		let data:any = {
			"credentials": {
				"usernamePassword": {
					"username": this.username.value,
					"password": this.password.value
				}
			},
			"environment": this.getEnvironmentData(),
			"peerType": "admin",
			"address": null
		};

		this.postLoginRequest(data);
	}

	getEnvironmentData():any {
		return {
			"hostname": null,
			"implementation": {
				// "language": "javascript",
				"appCodeName": navigator.appCodeName,
				"appName": navigator.appName,
				"appVersion": navigator.appVersion,
				"cookieEnabled": navigator.cookieEnabled,
				"language": navigator.language,
				"platform": navigator.platform,
				"product": navigator.product,
				"userAgent": navigator.userAgent,
			},
			"platform": navigator.platform,
			"processor": null,
			"systemPid": null,
			"user": this.username.value,
		};
	}

	postLoginRequest(data) {
		let headers = new Headers({
			"Accept": "application/json",
			"Content-Type": "application/json"
		});
		let options = new RequestOptions({headers: headers});

		this.http.post("/register", data)
			.subscribe(
				response => {
					let data = response.json();
					console.log("login response", data);
					this.authService.startSession(data['session_id']);
					this.router.navigateByUrl('');
				},
				error => {
					console.log("error", error);
				}
			);
	}
}
