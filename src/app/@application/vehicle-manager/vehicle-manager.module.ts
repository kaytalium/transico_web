import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleManagerComponent } from './vehicle-manager/vehicle-manager.component';
import { NavigationTagModule } from '@src/app/@component/navigation-tag';
import { AgmCoreModule } from '@agm/core'
import { AgmDirectionModule } from 'agm-direction'

@NgModule({
  declarations: [VehicleManagerComponent],
  imports: [
    CommonModule,
    NavigationTagModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA1f1qwbe1HEFwmc-vdl-l8mIaNIPu_M_w'
    }),
    AgmDirectionModule
  ],
  exports:[
    VehicleManagerComponent
    
  ]
})
export class VehicleManagerModule { }
