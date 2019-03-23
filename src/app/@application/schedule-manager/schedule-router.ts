import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SchedulesComponent } from "./schedules/schedules.component";
import { GeneralAssignmentComponent } from "./general-assignment/general-assignment.component";
import { DriverAssignmentComponent } from "./driver-assignment/driver-assignment.component";
import { BusScheduleComponent } from "./bus-schedule/bus-schedule.component";
import { InspectorsComponent } from './inspectors/inspectors.component';
import { InventoryComponent } from './inventory/inventory.component';
import { BusAndTerminalComponent } from './bus-and-terminal/bus-and-terminal.component';
import { BusAndDepotComponent } from './bus-and-depot/bus-and-depot.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "driver_schedule"
  },

  {
    path: "driver_schedule",
    component: BusScheduleComponent
  },
  {
    path: "driver_assignment",
    component: DriverAssignmentComponent
  },
  {
    path: "all_routes",
    component: GeneralAssignmentComponent
  },
  {
    path: "inventory",
    component: InventoryComponent
  },
  {
    path: "inspectors",
    component: InspectorsComponent
  },
  {
    path: "bus_and_terminal",
    component: BusAndTerminalComponent
  },
  {
    path: "bus_and_depot",
    component: BusAndDepotComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRouterModule {}
