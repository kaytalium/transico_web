import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  public route: object
  ngOnInit() {
    this.route = {
      signup: "auth/signup",
      forget: "auth/forget_password",
      dashboard: "application"
    }
  }

  navigate = (path: string)=>{
    this.router.navigateByUrl(path)
  }

}


