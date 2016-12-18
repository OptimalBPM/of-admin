import { Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
	public static SESSION_ID_NAME: string = 'X-Auth-Session-ID';
	public static SESSION_EXPIRY_NAME: string = 'X-Auth-Session-EXPIRY';
	public static SESSION_LENGTH: number = 60;

	isLoggedIn() {
		if (!localStorage.getItem(AuthService.SESSION_ID_NAME)) {
			return false;
		}

		if (this.sessionExpired()) {
			return false;
		}

		//this.resetSessionExpiry();
		return true;
	}

	startSession(session_id) {
		localStorage.setItem(AuthService.SESSION_ID_NAME, session_id);
		this.resetSessionExpiry();
	}

	resetSessionExpiry() {
		let t = new Date();
		let expiry = localStorage.getItem(AuthService.SESSION_EXPIRY_NAME);
		if (!expiry) {
			localStorage.setItem(AuthService.SESSION_EXPIRY_NAME, t.getTime().toString());
		} else {
			t.setMinutes(t.getMinutes() + AuthService.SESSION_LENGTH);
			localStorage.setItem(AuthService.SESSION_EXPIRY_NAME, t.getTime().toString());
		}
	}

	sessionExpired() {
		let expiry = localStorage.getItem(AuthService.SESSION_EXPIRY_NAME);
		if (!expiry) {
			return false;
		}
		expiry = parseInt(expiry);
		return Date.now() > expiry;
	}

	logout(){
		localStorage.removeItem(AuthService.SESSION_EXPIRY_NAME);
		localStorage.removeItem(AuthService.SESSION_ID_NAME);
	}
}
