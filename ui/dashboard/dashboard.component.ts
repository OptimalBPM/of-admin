import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';

let __moduleName: any; // fully resolved filename; defined at module load time  

@Component({
    moduleId: __moduleName,    
    selector: 'bpm-dashboard',
    templateUrl: 'dashboard.html',
    styleUrls: [ 'dashboard.css' ],
    directives: [ CORE_DIRECTIVES ]
})
export class DashboardComponent {}
