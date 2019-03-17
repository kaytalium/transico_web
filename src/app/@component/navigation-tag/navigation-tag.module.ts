import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationTagComponent } from './navigation-tag/navigation-tag.component';
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [NavigationTagComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[NavigationTagComponent]
})
export class NavigationTagModule { }
