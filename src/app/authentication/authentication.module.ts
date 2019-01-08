import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { LeftsideComponent } from './left-side/left-side.component';
import { LoginComponent } from './login/login.component';
import { MessComponent } from './mess/mess.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [LeftsideComponent, LoginComponent, MessComponent, SignUpComponent],
  imports: [
    CommonModule
  ],
  exports:[
    LeftsideComponent,
    LoginComponent
  ]
})
export class AuthenticationModule { }
