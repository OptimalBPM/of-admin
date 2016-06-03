import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';

import { DashboardComponent } from "./dashboard/index";
import { LoginComponent } from "./auth/login/index";
import { RegisterComponent } from "./auth/register/index";
import { EmailResetComponent } from "./auth/email-reset/index";
import { ResetComponent } from "./auth/reset/index";

@Component({
    selector: 'bpm-app',
    templateUrl: 'app/app.html',
    directives: [ ROUTER_DIRECTIVES ]
})
@Routes([
    {
        path: '/',
        component: DashboardComponent
    },
    {
        path: '/login',
        component: LoginComponent
    },
    {
        path:'/register',
        component: RegisterComponent
    },
    {
        path: '/password/request',
        component: EmailResetComponent
    },
    {
        path: '/password/reset',
        component: ResetComponent
    }
])

export class AppComponent  implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {
        let url = this.router.serializeUrl(this.router.urlTree);
        this.router.navigateByUrl(url);
    }
}
