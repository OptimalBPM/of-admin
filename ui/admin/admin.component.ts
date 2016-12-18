import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Http, Response } from '@angular/http';

import { NodesComponent } from '../nodes/index';

@Component({
    selector: 'bpm-admin',
    template: '<bpm-nodes></bpm-nodes>',
    directives: [ CORE_DIRECTIVES, NodesComponent ]
})
export class AdminComponent implements OnInit {
    ngOnInit() {
        console.log("Initiating AdminController");
        console.log("Initiated AdminController");
    }
}
