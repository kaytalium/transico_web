import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'time-holder',
  templateUrl: './time-holder.component.html',
  styleUrls: ['./time-holder.component.css']
})
export class TimeHolderComponent implements OnInit {

  timer = new Timer();
  time = {
    hours: [],
    minutes: []
  }

  selected = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  constructor() { }

  ngOnInit() {
    this.time.hours = this.timer.getHours()
    this.time.minutes = this.timer.getMinutes();
  }

}

export class Timer {
  public getHours(): Array<Object> {
    let hours = []
    for (let i = 1; i < 13; i++) {
      hours.push({ value: i, viewValue: i })
      console.log("this is I: " + i)
    }
    return hours
  }

  public getMinutes(): Array<Object> {
    let minutes = [];
    for (let i = 0; i < 60; i++) {
      minutes.push({ value: i, viewValue: this.doubleDigits(i) })
    }
    console.log("Minutes"+minutes)
    return minutes;
  }

  doubleDigits(num: number): string {
    if (num < 10) {
      return '0' + num;
    }
    return num.toString();
  }
}