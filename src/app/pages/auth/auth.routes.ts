import { AuthComponent } from "./auth.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { ConfirmOtpComponent } from "./confirm-otp/confirm-otp.component";
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
          path: 'confirm-otp',
          component: ConfirmOtpComponent
      },
        {
            path: 'change-password',
            component: ChangePasswordComponent
        },
        {
            path: '',
            redirectTo: 'log-in',
            pathMatch: 'full',
        },
    ],
}]
