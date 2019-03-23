import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SchedulesComponent } from "./schedules/schedules.component";
import { BusScheduleComponent } from "./bus-schedule/bus-schedule.component";
import { BusScheduleControlComponent } from "./@components/bus-schedule-control/bus-schedule-control.component";
import { MaterialModule } from "@material/material/material.module";
import { DriverAssignmentComponent } from "./driver-assignment/driver-assignment.component";
import { BusHolderComponent } from "./@components/bus-holder/bus-holder.component";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { config } from "@authentication/configure";
import { ScheduleRouterModule } from "./schedule-router";
import { GeneralAssignmentComponent } from "./general-assignment/general-assignment.component";
import { BusAndDepotComponent } from "./bus-and-depot/bus-and-depot.component";
import { DepotComponent } from "./depot/depot.component";
import { NewBusComponent } from "./new-bus/new-bus.component";
import { NavigationTagModule } from "@src/app/@component/navigation-tag";
import { Ng2CarouselamosModule } from "ng2-carouselamos";
import { InventoryComponent } from "./inventory/inventory.component";
import { InspectorsComponent } from "./inspectors/inspectors.component";
import { BusAndTerminalComponent } from "./bus-and-terminal/bus-and-terminal.component";

import {RoundProgressModule} from 'angular-svg-round-progressbar';

@NgModule({
  declarations: [
    SchedulesComponent,
    BusScheduleComponent,
    BusScheduleControlComponent,
    DriverAssignmentComponent,
    BusHolderComponent,
    GeneralAssignmentComponent,
    BusAndDepotComponent,
    DepotComponent,
    NewBusComponent,
    InventoryComponent,
    InspectorsComponent,
    BusAndTerminalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AngularFireModule.initializeApp(config.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    ScheduleRouterModule,
    NavigationTagModule,
    Ng2CarouselamosModule,
    RoundProgressModule
    
  ],
  exports: [ScheduleRouterModule],
  entryComponents: [NewBusComponent]
})
export class ScheduleManagerModule {}
