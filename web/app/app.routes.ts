import { provideRouter, RouterConfig } from '@angular/router';

import { AuthRoutes } from './auth/index';
import { DashBoardRoutes } from './dashboard/index';

export const routes: RouterConfig = [
    ...AuthRoutes,
    ...DashBoardRoutes
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
