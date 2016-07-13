import {Injectable} from '@angular/core';
import {Observable} from '';

@Injectable()
export class AuthService {
	isLoggedIn() {
		if (!localStorage.getItem('X-Auth-Session-ID')) {
			return false;
		}

		if (this.sessionExpired()) {
			return false;
		}

		this.resetSessionExpiry();
		return true;
	}

	startSession(session_id) {
		localStorage.setItem('X-Auth-Session-ID', session_id);
		this.resetSessionExpiry();
	}

	resetSessionExpiry() {
		let t = new Date();
		let expiry = localStorage.getItem('X-Auth-Session-EXPIRY');
		if (!expiry) {
			localStorage.setItem('X-Auth-Session-EXPIRY', t.getTime().toString());
		} else {
			t.setMinutes(t.getMinutes() + 120);
			localStorage.setItem('X-Auth-Session-EXPIRY', t.getTime().toString());
		}
	}

	sessionExpired() {
		let expiry = localStorage.getItem('X-Auth-Session-EXPIRY');
		if (!expiry) {
			return false;
		}
		expiry = parseInt(expiry);
		return Date.now() > expiry;
	}
}
