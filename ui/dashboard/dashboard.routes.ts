import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../auth/index';

export const DashBoardRoutes = [
    {
        path: '',
        component: DashboardComponent,
        canActivate: [ AuthGuard ]
    }
];
