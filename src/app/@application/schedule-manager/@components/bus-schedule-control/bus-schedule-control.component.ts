import { Component, OnInit } from '@angular/core';

export interface Period {
  value: string;
  periodValue: string;
}

@Component({
  selector: 'bus-schedule-control',
  templateUrl: './bus-schedule-control.component.html',
  styleUrls: ['./bus-schedule-control.component.css']
})
export class BusScheduleControlComponent implements OnInit {

  periods: Period[] = [
    {value: 'today', periodValue: 'Today'},
    {value: 'last_week', periodValue: 'Last Week'},
    {value: 'this_month', periodValue: 'This Month'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
