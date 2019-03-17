import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { nodeValue } from "@angular/core/src/view";
import { RoutePath } from "@helper/helper";

@Component({
  selector: "sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router, private routerPath: RoutePath) {}

  showSubmenu: boolean = false;
  navigation: Array<Navigation> = [];

  links = {
    dashboard: {
      status: "active"
    }
  };

  ngOnInit() {
    // navigation path for Dashboard
    this.navigation.push({
      path: this.routerPath.dashboard.path.main,
      status: ""
    });

    // navigation path for Schedule Manager
    this.navigation.push({
      path: this.routerPath.scheduleManager.path.driverSchedule,
      status: "active"
    });

     // navigation path for Schedule Manager/ Inspector 
     this.navigation.push({
      path: this.routerPath.scheduleManager.path.inspector_schedule,
      status: ""
    });

     // navigation path for Schedule Manager /Bus Inventory
     this.navigation.push({
      path: this.routerPath.scheduleManager.path.bus_inventory,
      status: ""
    });

     // navigation path for Schedule Manager / Bus and Terminal
     this.navigation.push({
      path: this.routerPath.scheduleManager.path.bus_and_terminal,
      status: ""
    });

    // navigation path for vehicle_manager
    this.navigation.push({
      path: "application/vehicle_manager",
      status: ""
    });

    // navigation path for maintenance_manager
    this.navigation.push({
      path: "application/maintenance_manager",
      status: ""
    });

    // navigation path for report_manager
    this.navigation.push({
      path: "application/report_manager",
      status: ""
    });
  }

  // Navigation function that will route user to module based on link
  navigate = (position: number) => {
    this.navigation.forEach((nav: Navigation) => {
      nav.status = "";
    });

    this.router.navigateByUrl(this.navigation[position].path);
    this.navigation[position].status = "active";
  };
}

export interface Navigation {
  path?: string;
  status?: string;
}

interface Submenu {
  value: string;
  icon: string;
  status: string;
}
