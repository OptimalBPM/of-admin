import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Http, Response } from '@angular/http';

export let nodesComponent: any = null;

@Component({
    selector: 'of-admin',
    template: '<of-nodes></of-nodes>',
    directives: [ CORE_DIRECTIVES, nodesComponent ]
})
export class AdminComponent implements OnInit {
    ngOnInit() {
        console.log("Initiating AdminController");
        console.log("Initiated AdminController");
    }
}


