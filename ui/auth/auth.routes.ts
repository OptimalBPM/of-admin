import  {LoginComponent, LogoutComponent, RegisterComponent, EmailResetComponent, ResetComponent} from './index';

export const AuthRoutes = [
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'register',
		component: RegisterComponent
	},
	{
		path: 'password/request',
		component: EmailResetComponent
	},
	{
		path: 'password/reset',
		component: ResetComponent
	},
	{
		path: 'logout',
		component: LogoutComponent
	}
];

