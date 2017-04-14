
import 'reflect-metadata';
import { Observable } from 'rxjs/Observable';
import {Injectable} from "@angular/core";


@Injectable
export class AuthService {
	public static SESSION_ID_NAME: string = 'X-Auth-Session-ID';
	public static SESSION_EXPIRY_NAME: string = 'X-Auth-Session-EXPIRY';
	public static SESSION_LENGTH: number = 60;
	public static settings : any;
	public static loggedIn : boolean = false;

	isLoggedIn() {
		if (!localStorage.getItem(AuthService.SESSION_ID_NAME)) {
			AuthService.loggedIn = false;
			return false;
		}

		if (this.sessionExpired()) {
			AuthService.loggedIn = false;
			return false;
		}

		//this.resetSessionExpiry();
		AuthService.loggedIn = true;
		return true;
	}

	startSession(session_id, settings) {
		AuthService.settings = settings;
		localStorage.setItem(AuthService.SESSION_ID_NAME, session_id);

		this.resetSessionExpiry();
		AuthService.loggedIn = true;
	}

	resetSessionExpiry() {
		let t = new Date();
		let expiry:any = localStorage.getItem(AuthService.SESSION_EXPIRY_NAME);
		if (!expiry) {
			localStorage.setItem(AuthService.SESSION_EXPIRY_NAME, t.getTime().toString());
		} else {
			t.setMinutes(t.getMinutes() + AuthService.SESSION_LENGTH);
			localStorage.setItem(AuthService.SESSION_EXPIRY_NAME, t.getTime().toString());
		}
	}

	sessionExpired() {
		let expiry:any = localStorage.getItem(AuthService.SESSION_EXPIRY_NAME);
		if (!expiry) {
			return false;
		}
		expiry = parseInt(expiry);
		AuthService.loggedIn = ! ( Date.now() > expiry);
		return !AuthService.loggedIn
	}

	logout(){
		localStorage.removeItem(AuthService.SESSION_EXPIRY_NAME);
		localStorage.removeItem(AuthService.SESSION_ID_NAME);
		AuthService.loggedIn = false;
	}
}

