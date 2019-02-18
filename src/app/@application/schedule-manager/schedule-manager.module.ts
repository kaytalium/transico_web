import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ScheduleManagerComponent } from './schedule-manager/schedule-manager.component';
import { BusScheduleComponent } from './bus-schedule/bus-schedule.component';
import { BusScheduleControlComponent } from './bus-schedule-control/bus-schedule-control.component';
import {MaterialModule} from '@material/material/material.module';



@NgModule({
  declarations: [ScheduleManagerComponent, BusScheduleComponent, BusScheduleControlComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
   
  ],
  exports:[
    ScheduleManagerComponent
  ]
})
export class ScheduleManagerModule { }
