import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleManagerComponent } from './vehicle-manager/vehicle-manager.component';
import { NavigationTagModule } from '@src/app/@component/navigation-tag';
import { AgmCoreModule } from '@agm/core'
import { AgmDirectionModule } from 'agm-direction'
import { environment } from '@env/environment';

@NgModule({
  declarations: [VehicleManagerComponent],
  imports: [
    CommonModule,
    NavigationTagModule,
    AgmCoreModule.forRoot({
      apiKey: environment.mapKey
    }),
    AgmDirectionModule
  ],
  exports:[
    VehicleManagerComponent
    
  ]
})
export class VehicleManagerModule { }
