import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {Http, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import '../core/rxjs.operators';

import {MapToIterable} from '../core/pipes/index'; // Objects are not iterable in ng2

let __moduleName: any; // fully resolved filename; defined at module load time

@Component({
	moduleId: __moduleName,
	selector: 'bpm-about',
	templateUrl: 'about.view.html',
	directives: [CORE_DIRECTIVES],
	pipes: [MapToIterable]
})
export class AboutComponent implements OnInit {

	broker_environment: any;

	constructor(private http: Http) {
		console.log("Initiating AboutController");
		this.getAboutData();
		console.log("Initiated AboutController");
	}

	getAboutData() {
		this.sendAPIRequest()
			.subscribe(
				broker_env => {
					this.broker_environment = broker_env;
					console.log(broker_env);
				},
				error => {
					this.broker_environment = error;
					console.log('error');
					console.log(error);
				});
	}

	sendAPIRequest(): Observable<any> {
		return this.http.get('/admin/get_broker_environment')
			.map(this.extractData)
			.catch(this.handleError);
	}

	extractData(res: Response) {
		return res.json();
	}

	handleError(error: any) {
		let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';

		this.broker_environment = "Failed to retrieve broker environment: " + status;

		console.log('my own error');
		console.error(errMsg); // log to console
		return Observable.throw(errMsg);
	}

	getDataType(value) {
		if (typeof value === "object") {
			return "dict";
		} else if (typeof value === "array") {
			return "array";
		} else if (typeof value === "string") {
			return "string";
		} else {
			return null;
		}
	}

	ngOnInit() {

	}
}
