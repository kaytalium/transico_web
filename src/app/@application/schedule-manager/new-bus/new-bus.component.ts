import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-new-bus',
  templateUrl: './new-bus.component.html',
  styleUrls: ['./new-bus.component.css']
})
export class NewBusComponent implements OnInit {

  value = 'Clear me';

  constructor() { }

  ngOnInit() {
  }

}
