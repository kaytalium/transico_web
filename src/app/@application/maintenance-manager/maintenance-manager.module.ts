import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceManagerComponent } from './maintenance-manager/maintenance-manager.component';
import { NavigationTagModule } from '@src/app/@component/navigation-tag';

@NgModule({
  declarations: [MaintenanceManagerComponent],
  imports: [
    CommonModule,
    NavigationTagModule
  ]
})
export class MaintenanceManagerModule { }
