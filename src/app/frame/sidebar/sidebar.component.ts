import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  navigationImages: Object
  navigationURL: Object
  ngOnInit() {
    // Image url links
    this.navigationImages = {
      dashboard: 'dashboard',
      reportManager: 'bar_chart',
      scheduleManager: 'departure_board',
      vehicleManager: 'directions_bus',
      maintenanceManager: 'build',      
    }

    // navigation path
    this.navigationURL = {
      dashboard: "application/dashboard",
      reportManager: "application/report",
      scheduleManager: "application/schedule_manager",
      vehicleManager: "application/vehicle_manager",
      maintenanceManager: "application/maintenance_manager"
    }
  }

  // Navigation function that will route user to module based on link
  navigate = (url: string)=>{
      this.router.navigateByUrl(url);
  }

}