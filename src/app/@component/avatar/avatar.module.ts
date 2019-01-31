import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { LockscreenAvatarComponent } from './lockscreen-avatar/lockscreen-avatar.component'

// Angular Material Design
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'


@NgModule({
  declarations: [AvatarComponent, LockscreenAvatarComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports:[AvatarComponent, LockscreenAvatarComponent]
})
export class AvatarModule { }
