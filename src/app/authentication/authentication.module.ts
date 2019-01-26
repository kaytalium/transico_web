import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

//Material Design links
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

import { AvatarModule } from '@component/avatar'
import { SecondaryUsersModule } from '@component/secondary-users'
import { ClockModule } from "@component/clock"

import { AuthenticationComponent } from '@authentication/authentication.component';
import { AuthRoutingModule } from '@authentication/auth-routing.module'
import { LoginComponent } from '@authentication/login/login.component';
import { MessComponent } from '@authentication/mess/mess.component';
import { SignUpComponent } from '@authentication/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';

@NgModule({
  declarations: [
    LoginComponent, 
    MessComponent, 
    SignUpComponent,
    AuthenticationComponent,
    ForgetPasswordComponent,
    LockscreenComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    AvatarModule,
    SecondaryUsersModule,
    ClockModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[AuthRoutingModule]
})
export class AuthenticationModule { }
