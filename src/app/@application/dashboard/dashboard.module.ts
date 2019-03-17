import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatIconModule } from '@angular/material';
import { NavigationTagModule } from '@src/app/@component/navigation-tag';


@NgModule({
  declarations: [NavComponent, DashboardComponent],
  imports: [
    CommonModule,
    MatIconModule,
    NavigationTagModule
  ],
  exports:[
    DashboardComponent
  ]
  
})
export class DashboardModule { }
