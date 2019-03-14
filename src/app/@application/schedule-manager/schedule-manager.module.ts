import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SchedulesComponent } from './schedules/schedules.component';
import { BusScheduleComponent } from './bus-schedule/bus-schedule.component';
import { BusScheduleControlComponent } from './@components/bus-schedule-control/bus-schedule-control.component';
import {MaterialModule} from '@material/material/material.module';
import {MatDialogModule} from '@angular/material/dialog';
import { DriverAssignmentComponent } from './driver-assignment/driver-assignment.component';
import { BusHolderComponent } from './@components/bus-holder/bus-holder.component'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { config } from '@authentication/configure';
import { MatCardModule } from '@angular/material';
import { ScheduleRouterModule } from './schedule-router';
import { GeneralAssignmentComponent } from './general-assignment/general-assignment.component';
import { WorkBoardComponent } from './work-board/work-board.component';
import { BusDepotsComponent } from './bus-depots/bus-depots.component';
import { NewBusComponent } from './new-bus/new-bus.component';


@NgModule({
  declarations: [
    SchedulesComponent, 
    BusScheduleComponent, 
    BusScheduleControlComponent, 
    DriverAssignmentComponent, 
    BusHolderComponent, 
    GeneralAssignmentComponent, 
    WorkBoardComponent, BusDepotsComponent, NewBusComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatDialogModule,
    AngularFireModule.initializeApp(config.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    MatCardModule,
    ScheduleRouterModule
   
  ],
  exports:[
    ScheduleRouterModule
  ],
  entryComponents:[NewBusComponent]
})
export class ScheduleManagerModule { }
