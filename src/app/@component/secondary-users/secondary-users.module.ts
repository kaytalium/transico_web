import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondaryUsersComponent } from './secondary-users.component'
import { AvatarModule } from '../avatar'

@NgModule({
  declarations: [SecondaryUsersComponent],
  imports: [
    CommonModule,
    AvatarModule
  ],
  exports:[SecondaryUsersComponent]
})
export class SecondaryUsersModule { }
