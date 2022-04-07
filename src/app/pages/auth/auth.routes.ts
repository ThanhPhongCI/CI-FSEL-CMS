import { AuthComponent } from "./auth.component";
import { ForgotComponent } from "./forgot/forgot.component";
import { LoginComponent } from "./login/login.component";

export const authRoutes = [{
    path: '',
    component: AuthComponent,
    children: [
        {
          path: 'log-in',
          component: LoginComponent,
        },
        {
          path: 'forgot',
          component: ForgotComponent
        },
        {
          path: '',
          redirectTo: 'log-in',
          pathMatch: 'full',
        },
      ],
}]