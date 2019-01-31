import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { RoutePath } from '@src/app/@helper/helper';

export interface Jobs {
  name: string;
  hint: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  positionControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);
  jobs: Jobs[] = [
    {name: 'Administrator', hint: 'Full access to the system'},
    {name: 'Inspector', hint: 'Low access to information'},
    {name: 'Supervisor', hint: 'medium access to information'},
  ];

  constructor(private router: Router, private routePath: RoutePath) { }

  ngOnInit() {
  }

  backToLogin = (path: number)=>{
    this.router.navigateByUrl(this.routePath.login)
  }

  registerNewUser(){
    
  }

}
