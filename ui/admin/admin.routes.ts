import {AdminComponent} from './admin.component';
import {AuthGuard} from '/auth/auth.guard';
export const AdminRoutes = [
	{
		path: 'admin',
		component: AdminComponent,
		canActivate: [ AuthGuard ]
	}
];
