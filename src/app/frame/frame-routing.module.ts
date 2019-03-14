import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrameComponent } from './frame/frame.component';

// children module components
import { DashboardComponent } from '@application/dashboard';
import { VehicleManagerComponent } from '@application/vehicle-manager';
import { MaintenanceManagerComponent } from '@application/maintenance-manager';
import { ReportManagerComponent } from '@application/report-manager';


const routes: Routes = [
  {
    path: '', component: FrameComponent,
    children:[
      { path: '', redirectTo: 'schedule_manager', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'schedule_manager',
        loadChildren: '../@application/schedule-manager/schedule-manager.module#ScheduleManagerModule'
      },
      {
        path: 'vehicle_manager',
        component: VehicleManagerComponent
      },
      {
        path: 'maintenance_manager',
        component: MaintenanceManagerComponent
      },
      {
        path: 'report_manager',
        component: ReportManagerComponent
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrameRoutingModule { }



