import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserObject } from '@component/interface';
import { User } from '@component/User.class';

@Component({
  selector: 'lockscreen',
  templateUrl: './lockscreen.component.html',
  styleUrls: ['./lockscreen.component.css']
})
export class LockscreenComponent implements OnInit {

  route: object
  additionalUsers: Array<User>;
  constructor(private router: Router) { }

  ngOnInit() {
    this.route = {
      login: 'application',
      switch: 'auth/login'
    }

    this.additionalUsers = [
      new User({
        username:"Jimmy Fallon",
        imageSrc: '../../../assets/img/jimmy.jpg',
        initials: "JF",
        status: false
      }),
        
     new User({
        username:"Kaley Cuoco",
        imageSrc: '../../../assets/img/kaley.jpg',
        initials: "KC",
        status: false
      })

    ]
  }

  navigation(path: string) {
    this.router.navigateByUrl(path)
  }

}
