import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleManagerComponent } from './vehicle-manager/vehicle-manager.component';

@NgModule({
  declarations: [VehicleManagerComponent],
  imports: [
    CommonModule
  ],
  exports:[
    VehicleManagerComponent
  ]
})
export class VehicleManagerModule { }
