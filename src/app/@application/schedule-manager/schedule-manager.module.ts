import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ScheduleManagerComponent } from './schedule-manager/schedule-manager.component';
import { BusScheduleComponent } from './bus-schedule/bus-schedule.component';
import { BusScheduleControlComponent } from './bus-schedule-control/bus-schedule-control.component';
import {MaterialModule} from '@material/material/material.module';
import {MatDialogModule} from '@angular/material/dialog';
import { DriverAssignmentComponent } from './driver-assignment/driver-assignment.component';
import { TimeHolderComponent } from './time-holder/time-holder.component'


@NgModule({
  declarations: [ScheduleManagerComponent, BusScheduleComponent, BusScheduleControlComponent, DriverAssignmentComponent, TimeHolderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatDialogModule
   
  ],
  exports:[
    ScheduleManagerComponent
  ],
  entryComponents:[DriverAssignmentComponent]
})
export class ScheduleManagerModule { }
