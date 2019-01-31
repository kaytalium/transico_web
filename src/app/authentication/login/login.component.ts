import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserObject } from '@component/interface';
import { User } from '@component/User.class';
import { ActiveUserLog } from '@helper/ActiveUserLog';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  constructor(private router: Router, private additionalUsers: ActiveUserLog){}
  
  isLogin: boolean = true
  activeUserData: User;


  ngOnInit() {}

  navigate = (path: string) => {
    this.router.navigateByUrl(path)
  }


  secondaryUserClick(user:User){  
    // console.log("Login data: "+user.initials) 
    this.activeUserData = user
    this.isLogin = false;
  }

  switch(event){
    this.isLogin = true;
  }

 

}


