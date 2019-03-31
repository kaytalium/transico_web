import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSort, MatTableDataSource } from "@angular/material";
import { MatDialog } from "@angular/material";
import { DriverScheduleCollection } from "../classes/driver-schedule";
import { SchedulingProcessorService } from "../services/scheduling-processor.service";
import { DriverScheduleObj, RouteSchedule } from "../classes/system-interface";
import { Router } from "@angular/router";
import { RoutePath } from "@helper/helper";

@Component({
  selector: "bus-schedule",
  templateUrl: "./bus-schedule.component.html",
  styleUrls: ["./bus-schedule.component.css"],
  providers: [SchedulingProcessorService]
})
export class BusScheduleComponent implements OnInit {
  arrows: HTMLDivElement;

  collectionOfRouteSchedules: Array<RouteSchedule>;

  collection: DriverScheduleCollection = new DriverScheduleCollection();

  constructor(
    public dialog: MatDialog,
    private driverScheduleService: SchedulingProcessorService,
    private router: Router,
    private route: RoutePath
  ) {
    driverScheduleService.get().subscribe((ds: DriverScheduleObj[]) => {
      console.log(ds);

      //  we now need to organize the data we got from the server in the way we need it in order to display
      this.collection.setCollection(ds);
      this.collectionOfRouteSchedules = this.collection.getCollection();
    });
  }

  ngOnInit() {
    // this.arrows.style.display = "none";
  }

  openDialog(): void {
    this.router.navigateByUrl(this.route.scheduleManagerDriverSchedule);
  }

  showAll(routeNumber: string){
    this.router.navigate([this.route.scheduleManager.path.routes,routeNumber])
  }
}


