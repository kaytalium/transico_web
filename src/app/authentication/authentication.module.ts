import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationComponent } from '@authentication/authentication.component';
import { AuthRoutingModule } from '@authentication/auth-routing.module'
import { LoginComponent } from '@authentication/login/login.component';
import { MessComponent } from '@authentication/mess/mess.component';
import { SignUpComponent } from '@authentication/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

@NgModule({
  declarations: [
    LoginComponent, 
    MessComponent, 
    SignUpComponent,
    AuthenticationComponent,
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports:[AuthRoutingModule]
})
export class AuthenticationModule { }
