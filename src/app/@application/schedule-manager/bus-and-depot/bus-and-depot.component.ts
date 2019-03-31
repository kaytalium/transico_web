import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { NewBusComponent } from '../new-bus/new-bus.component';
import { MatPaginator, MatTableDataSource, MatDialog } from "@angular/material";
import { BusDepotService } from '../services/bus-depot-service';
import { BusFleet } from '../classes/system-interface';

@Component({
  selector: 'app-work-board',
  templateUrl: './bus-and-depot.component.html',
  styleUrls: ['./bus-and-depot.component.css'],
  providers: [BusDepotService]
})
export class BusAndDepotComponent implements OnInit {
  displayedColumns: string[] = [
    "busModel",
    "condition",
    "depot",
    "lastService",
    "routeNumber",
    "seatCount",
    "action"
  ];
  dataSource;
  depot: string
  constructor(private route: ActivatedRoute, public dialog: MatDialog, private busService: BusDepotService ) {
    this.depot = this.route.snapshot.paramMap.get("id")
    this.busService.getBusFromDepot(this.depot).subscribe(res=>{
      this.dataSource = new MatTableDataSource<BusFleet>(res);
    })
   }

  ngOnInit() {
  }

  newBus(){
    const dialogRef = this.dialog.open(NewBusComponent, {
      width: '800px',
      height:'540px',
      data: {depotName: this.depot}

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

}
