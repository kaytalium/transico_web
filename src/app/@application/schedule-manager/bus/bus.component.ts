import { Component, OnInit, Input } from '@angular/core';
import { BusDepotService } from '../services/bus-depot-service';


@Component({
  selector: 'bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css'],
  providers: [BusDepotService]
})
export class BusComponent implements OnInit {

 
@Input() info;
  

  constructor() { }

  ngOnInit() { }

  

}
