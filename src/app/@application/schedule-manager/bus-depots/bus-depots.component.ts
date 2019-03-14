import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { BusDepotService } from '../services/bus-depot-service';
import { BusFleetDataTableColumns } from '../classes/system-interface';
import { FleetManagement } from '../classes/fleet-management';
import { NewBusComponent } from '../new-bus/new-bus.component';

@Component({
  selector: 'bus-depots',
  templateUrl: './bus-depots.component.html',
  styleUrls: ['./bus-depots.component.css'],
  providers: [BusDepotService]
})
export class BusDepotsComponent implements OnInit {

  fleetManagement: FleetManagement = new FleetManagement()
  displayedColumns = ['modelNumber', 'depot', 'routeNumber', 'condition', 'lastService', 'seatCount'];
  dataSource: MatTableDataSource<BusFleetDataTableColumns>

  @ViewChild(MatSort) sort: MatSort

  constructor(public dialog: MatDialog, private fleetService: BusDepotService) {
    this.fleetService.get().subscribe(res => {
      console.log("Bus Fleet info: ", res)

      this.fleetManagement.setCollection(res);

      this.dataSource = new MatTableDataSource(this.fleetManagement.getCollection()) 
      this.dataSource.sort = this.sort
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
