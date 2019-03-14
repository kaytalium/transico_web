import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { timer } from 'rxjs';
import { Router } from '@angular/router';
import { RoutePath } from '@helper/helper';
import { RouteAssignment } from '../classes/route-service';
import { RouteNumber, BusRoute, BusRouteAssignmentStats, BusAndRouteAssignment } from '../classes/system-interface';
import { BusDetail } from '../classes/bus-route-assignment';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-driver-assignment',
  templateUrl: './driver-assignment.component.html',
  styleUrls: ['./driver-assignment.component.css'],
  providers: [RouteAssignment]
})
export class DriverAssignmentComponent implements OnInit {

  selectedValue: string
  routeNumbers: Array<RouteNumber> = []
  routeDescription: Array<BusRoute> = []
  routeDescriptionView: BusRoute

  // vars for the route display info object not working dont know why
  originAndDestination: string
  routesVia: Array<string> = []

  //Bus Route Assignment
  busRouteAssignmentStats: BusRouteAssignmentStats = {}

  // Bus and route assignments view varible 
  buses: BusDetail[] = []


  selected = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  selectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  matcher = new MyErrorStateMatcher();


  constructor(private router: Router, private route: RoutePath, private busRoutes: RouteAssignment) { }

  ngOnInit() {

    this.routeDescriptionView = {
      terminals: { a: {}, b: {} }
    }

    this.busRoutes.get().subscribe(dt => {
      // console.log(dt)
      this.routeNumbers = []
      this.routeDescription = dt
      dt.forEach((br: BusRoute, id: number) => {
        this.routeNumbers.push({ value: id, viewValue: br.number })
      })
    })
  }

  onBackClick(): void {
    // this.dialogRef.close();
    this.router.navigateByUrl(this.route.scheduleManagerSchedules)
  }

  public OnSelectChange() {
    // console.log("onchange: ", this.routeDescription[this.selectedValue])
    this.routeDescriptionView = this.routeDescription[this.selectedValue]

    if (typeof this.routeDescriptionView != "undefined") {

      // Assign value to view
      this.originAndDestination = this.routeDescriptionView.terminals.a.location + " to " +
        this.routeDescriptionView.terminals.b.location

      this.routesVia = this.routeDescriptionView.via

      // Search in the assignment table for the route Number 
      this.busRouteAssignmentStats = {}
      this.busRoutes.getAssignmentStats(this.routeDescriptionView.number).subscribe(res=>{
        res.forEach((busAssignmentStats: BusRouteAssignmentStats)=>{
          // console.log(busAssignmentStats)
          this.busRouteAssignmentStats = busAssignmentStats
        })        
      })

      // Get the list of buses that is assigned to this route
      this.busRoutes.getBusAndRouteAssignment(this.routeDescriptionView.number).subscribe(res=>{

        this.buses = []
        res.forEach(obj=>{
          this.buses.push(new BusDetail(obj));
        })
      })

    }
  }
}


