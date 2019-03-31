import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { NewBusComponent } from '../new-bus/new-bus.component';

@Component({
  selector: 'app-work-board',
  templateUrl: './bus-and-depot.component.html',
  styleUrls: ['./bus-and-depot.component.css']
})
export class BusAndDepotComponent implements OnInit {

  depot: string
  constructor(private route: ActivatedRoute, public dialog: MatDialog, ) {
    this.depot = this.route.snapshot.paramMap.get("id")
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
