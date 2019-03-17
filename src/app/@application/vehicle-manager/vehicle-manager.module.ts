import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleManagerComponent } from './vehicle-manager/vehicle-manager.component';
import { NavigationTagModule } from '@src/app/@component/navigation-tag';

@NgModule({
  declarations: [VehicleManagerComponent],
  imports: [
    CommonModule,
    NavigationTagModule
  ],
  exports:[
    VehicleManagerComponent
    
  ]
})
export class VehicleManagerModule { }
