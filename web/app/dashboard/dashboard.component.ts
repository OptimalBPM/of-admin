import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';

@Component({
    selector: 'bpm-dashboard',
    templateUrl: 'app/dashboard/dashboard.html',
    styleUrls: [ 'app/dashboard/dashboard.css' ],
    directives: [ CORE_DIRECTIVES ]
})
export class DashboardComponent {}