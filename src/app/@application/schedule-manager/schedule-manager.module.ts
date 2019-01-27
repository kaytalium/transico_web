import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleManagerComponent } from './schedule-manager/schedule-manager.component';

@NgModule({
  declarations: [ScheduleManagerComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ScheduleManagerComponent
  ]
})
export class ScheduleManagerModule { }
