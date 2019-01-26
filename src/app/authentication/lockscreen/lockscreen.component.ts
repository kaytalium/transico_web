import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lockscreen',
  templateUrl: './lockscreen.component.html',
  styleUrls: ['./lockscreen.component.css']
})
export class LockscreenComponent implements OnInit {

  route: object
  additionalUsers: object;
  constructor(private router: Router) { }

  ngOnInit() {
    this.route = {
      login: 'application',
      switch: 'auth/login'
    }

    this.additionalUsers = [
      {
        username:"Jimmy Fallon",
        image: '../../../assets/img/jimmy.jpg',
        initials: "JF"
      },
      {
        username:"Kaley Cuoco",
        image: '../../../assets/img/kaley.jpg',
        initials: "KC"
      }

    ]
  }

  navigation(path: string) {
    this.router.navigateByUrl(path)
  }

}
