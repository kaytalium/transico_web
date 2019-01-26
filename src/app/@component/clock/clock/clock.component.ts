import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  @Input() type: string;
  today: Date;
  
  constructor() { }

  ngOnInit() {
    this.today = new Date()
    this.getTime().subscribe((time : Date) => {
        this.today = time;
    })
    
  }

  getTime(){
    return new Observable(observer=>{
      setInterval(()=>observer.next(new Date()),1000)
    });
  }

}
