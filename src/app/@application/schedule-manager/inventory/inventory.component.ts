import { Component, OnInit } from '@angular/core';
import { BusDepotService } from '../services/bus-depot-service';
import { FleetManagement } from '../classes/fleet-management';
import { MatDialog } from '@angular/material';
import { NewBusComponent } from '../new-bus/new-bus.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
  providers:[BusDepotService]
})
export class InventoryComponent implements OnInit {

  fleetManagement: FleetManagement = new FleetManagement()

  constructor(public dialog: MatDialog, private fleetService: BusDepotService) { 
    this.fleetService.get().subscribe(res => {
      console.log("Bus Fleet info: ", res)

      this.fleetManagement.setCollection(res);
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
