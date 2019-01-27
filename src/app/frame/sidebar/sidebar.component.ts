import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { nodeValue } from '@angular/core/src/view';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  navigation: Array<Navigation> = []

  ngOnInit() {
   
    // navigation path for Dashboard
    this.navigation.push({
      value: "Dashboard",
      path: "application/dashboard",
      status: "active",
      title: "Transico Dashboard",
      icon: "dashboard",
      position: 0
    })

    // navigation path for Schedule Manager
    this.navigation.push({
      value: "Schedule Manager",
      path: "application/schedule_manager",
      status: "",
      title: "Scheduling",
      icon: "departure_board",
      position: 1
    })

    // navigation path for vehicle_manager
    this.navigation.push({
      value: "Vehicle Manager",
      path: "application/vehicle_manager",
      status: "",
      title: "Vehicle",
      icon: "directions_bus",
      position: 2
    })

    // navigation path for maintenance_manager
    this.navigation.push({
      value: "Maintenance Manager",
      path: "application/maintenance_manager",
      status: "",
      title: "Maintanance",
      icon: "build",
      position: 3
    })

    // navigation path for report_manager
    this.navigation.push({
      value: "Report Manager",
      path: "application/report_manager",
      status: "",
      title: "Report",
      icon: "bar_chart",
      position: 4
    })

  }

  // Navigation function that will route user to module based on link
  navigate = (position: number) => {

    this.navigation.forEach((nav: Navigation) => {
      nav.status = "";
    })

    this.router.navigateByUrl(this.navigation[position].path);
    this.navigation[position].status = "active"

  }

}

export interface Navigation {
  value?: string,
  path?: string,
  status?: string,
  title?: string,
  icon?: string,
  position: number
}
