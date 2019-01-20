import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  private route: Array<string>
  ngOnInit() {
    this.route = [
      "auth/signup",
      "auth/forget_password"
    ]
  }

  navigate = (path: number)=>{
    this.router.navigateByUrl(this.route[path])
  }

}


