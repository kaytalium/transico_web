import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-vehicle-manager",
  templateUrl: "./vehicle-manager.component.html",
  styleUrls: ["./vehicle-manager.component.css"]
})
export class VehicleManagerComponent implements OnInit {
  // AIzaSyAvUGU_C2t2yVlLMC5VFNswzfjuLB2kw6M

  dir: Object;
  public waypoints: any = [];
  public renderOptions = {
    draggable: true
  };
  

  constructor() {}

  ngOnInit() {
    this.dir = {
      origin: { lat: 17.973379, lng: -76.758659 },
      destination: { lat: 17.98637, lng: -76.94783 }
    };
  }

  public change(event: any) {
    this.waypoints = event.request.waypoints;
  }
}
