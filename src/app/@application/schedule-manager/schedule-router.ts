import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { SchedulesComponent } from './schedules/schedules.component';
import { WorkBoardComponent } from './work-board/work-board.component';
import { GeneralAssignmentComponent } from './general-assignment/general-assignment.component';
import { DriverAssignmentComponent } from './driver-assignment/driver-assignment.component';

const routes: Routes = [
    {
        path: '', redirectTo: 'schedules'},
        
                {
                    path: 'schedules', component: SchedulesComponent,
                },
                {
                    path: 'assignments', component: GeneralAssignmentComponent
                },
                {
                    path: 'driver_schedule', component: DriverAssignmentComponent

                }
            
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ScheduleRouterModule { }