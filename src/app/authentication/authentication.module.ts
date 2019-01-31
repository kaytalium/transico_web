import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'



//Material Design links
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';

//System Component links
import { AvatarModule } from '@component/avatar'
import { SecondaryUsersModule } from '@component/secondary-users'
import { ClockModule } from "@component/clock"
import { VersionModule } from '@component/version'
import { LogoModule } from '@component/logo'

import { AuthenticationComponent } from '@authentication/authentication.component';
import { AuthRoutingModule } from '@authentication/auth-routing.module'
import { LoginComponent } from '@authentication/login/login.component';
import { MessageComponent } from '@authentication/message/message.component';
import { SignUpComponent } from '@authentication/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { ActiveUserFormComponent } from './active-user-form/active-user-form.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ForgetPasswordDialogPopupComponent } from './forget-password-dialog-popup/forget-password-dialog-popup.component';

@NgModule({
  declarations: [
    LoginComponent, 
    MessageComponent, 
    SignUpComponent,
    AuthenticationComponent,
    ForgetPasswordComponent,
    LockscreenComponent,
    ActiveUserFormComponent,
    UserLoginComponent,
    ForgetPasswordDialogPopupComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    AvatarModule,
    VersionModule,
    LogoModule,
    SecondaryUsersModule,
    ClockModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  entryComponents:[ForgetPasswordDialogPopupComponent],
  exports:[AuthRoutingModule],
})
export class AuthenticationModule { }
