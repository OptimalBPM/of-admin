import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';

@Component({
    selector: 'bpm-dashboard',
    templateUrl: 'admin/dashboard/dashboard.html',
    styleUrls: [ 'admin/dashboard/dashboard.css' ],
    directives: [ CORE_DIRECTIVES ]
})
export class DashboardComponent {}
