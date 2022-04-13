import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutModule } from 'src/app/layouts/auth-layout/auth-layout.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ConfirmOtpComponent } from './confirm-otp/confirm-otp.component';
import { RouterModule } from '@angular/router';
import { authRoutes } from './auth.routes';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AuthComponent, LoginComponent, ForgotComponent, ChangePasswordComponent, ConfirmOtpComponent],
  imports: [
    CommonModule,
    AuthLayoutModule,
    RouterModule.forChild(authRoutes),
    ReactiveFormsModule
  ],
  exports: [AuthComponent]
})
export class AuthModule { }
