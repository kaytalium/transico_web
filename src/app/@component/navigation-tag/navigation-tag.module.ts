import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationTagComponent } from './navigation-tag/navigation-tag.component';

@NgModule({
  declarations: [NavigationTagComponent],
  imports: [
    CommonModule
  ],
  exports:[NavigationTagComponent]
})
export class NavigationTagModule { }
