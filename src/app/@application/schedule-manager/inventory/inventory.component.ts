import { Component, OnInit } from '@angular/core';
import { BusDepotService } from '../services/bus-depot-service';
import { FleetManagement } from '../classes/fleet-management';
import { MatDialog } from '@angular/material';
import { NewBusComponent } from '../new-bus/new-bus.component';
import { BusFleetDataTableColumns, BusDepot } from '../classes/system-interface';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
  providers:[BusDepotService]
})
export class InventoryComponent implements OnInit {

  fleetManagement: FleetManagement = new FleetManagement()
  busFleetCollection: Array<BusFleetDataTableColumns>

  depotCollection: Array<BusDepot>

  constructor(public dialog: MatDialog, private fleetService: BusDepotService) { 
    this.fleetService.getDepot().subscribe(res => {
      console.log("Bus Fleet info: ", res)
        this.depotCollection = res

      // this.fleetManagement.setDepotCollection(res);
      // this.busFleetCollection = this.fleetManagement.getDepotCollection();
    })
  }

  ngOnInit() {
  }


  openDialog(){
    const dialogRef = this.dialog.open(NewBusComponent, {
      width: '800px',
      height:'600px'

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
