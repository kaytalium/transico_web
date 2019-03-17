import { Component, OnInit, Input } from '@angular/core';
import { Schedule } from '../classes/system-interface';
import { InternalFormsSharedModule } from '@angular/forms/src/directives';

@Component({
  selector: 'schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {

  @Input() info: Schedule
  meterColor: string;
  constructor() { }

  ngOnInit() {
    if(this.info.progressAmount >= 0 && this.info.progressAmount <= 30 ){
      this.meterColor = "red"
    }else if(this.info.progressAmount >= 31 && this.info.progressAmount <= 60 ){
      this.meterColor = "orange"
    }else if(this.info.progressAmount > 60){
      this.meterColor = 'green'
    }
  }

}
