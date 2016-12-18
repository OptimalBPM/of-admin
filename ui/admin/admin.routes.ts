import {AdminComponent} from './admin.component';
import {AuthGuard} from '../auth/index';
export const AdminRoutes = [
	{
		path: 'admin',
		component: AdminComponent,
		canActivate: [AuthGuard]
	}
];
