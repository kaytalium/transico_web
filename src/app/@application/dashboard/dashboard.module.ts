import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [NavComponent, DashboardComponent],
  imports: [
    CommonModule
  ],
  exports:[
    DashboardComponent
  ]
  
})
export class DashboardModule { }
