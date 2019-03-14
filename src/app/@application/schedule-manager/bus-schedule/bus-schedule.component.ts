import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import {MatDialog} from '@angular/material';
import { DriverSchedule } from '../classes/driver-schedule';
import { SchedulingProcessorService } from '../services/scheduling-processor.service';
import { DriverScheduleObj, DriverScheduleDataTableColumns } from '../classes/system-interface';
import { Router } from '@angular/router';
import { RoutePath } from '@helper/helper';



@Component({
  selector: 'bus-schedule',
  templateUrl: './bus-schedule.component.html',
  styleUrls: ['./bus-schedule.component.css'],
  providers:[SchedulingProcessorService]
})
export class BusScheduleComponent implements OnInit {

  driverSchedule: DriverSchedule = new DriverSchedule()
  collectionOfSchedules: Array<DriverSchedule>

  displayedColumns = ['date', 'busId', 'routeNumber', 'routeDescription', 'driverName', 'duration','assignedBy','action'];
  dataSource: MatTableDataSource<DriverScheduleDataTableColumns>

  @ViewChild(MatSort) sort: MatSort

  constructor(public dialog: MatDialog, private driverScheduleService: SchedulingProcessorService, 
    private router: Router, private route: RoutePath) { 
    driverScheduleService.get().subscribe((ds:DriverScheduleObj[])=>{
      this.driverSchedule.setCollection(ds)
      // console.log(ds)
      this.dataSource = new MatTableDataSource(this.driverSchedule.getCollection()) 
      this.dataSource.sort = this.sort
    })

   
    
  }

  ngOnInit() {
    
  }

  openDialog(): void {
    this.router.navigateByUrl(this.route.scheduleManagerDriverSchedule)
  }

}


export interface UserData {
  date: string;
  busId: string;
  routeNumber: string;
  routeDescription: string;
  driverName: string;
  duration: string;
  assignedBy: string
  action?: string
}