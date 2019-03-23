import { Component, OnInit, Input } from "@angular/core";
import { BusDepotService } from "../services/bus-depot-service";
import { BusDepot } from "../classes/system-interface";
import { Router } from '@angular/router';
import { RoutePath } from '@helper/helper';

@Component({
  selector: "depot",
  templateUrl: "./depot.component.html",
  styleUrls: ["./depot.component.css"],
  providers: [BusDepotService]
})
export class DepotComponent implements OnInit {
  @Input() info: BusDepot;

  indicator: string;
  condition: string;

  constructor(private router: Router, private routePath: RoutePath) {}

  ngOnInit() {
    this.info.unassigned
    if(this.info.defaultColor && this.info.defaultColor.length > 7){
      this.indicator = this.info.defaultColor
      this.condition = this.info.defaultColor+"_text"
    }else{
      this.indicator = "default_black"
      this.condition = "default_black_text"
    }
    
  }

  openDepot(){
    //Navigate to the depot location
    // pass this.info.depotName as an argument 
    this.router.navigateByUrl(this.routePath.scheduleManager.path.bus_depot)
  }
}
