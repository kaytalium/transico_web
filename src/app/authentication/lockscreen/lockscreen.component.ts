import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lockscreen',
  templateUrl: './lockscreen.component.html',
  styleUrls: ['./lockscreen.component.css']
})
export class LockscreenComponent implements OnInit {

  route: object
  constructor(private router: Router) { }

  ngOnInit() {
    this.route = {
      login: 'application',
      switch: 'auth/login'
    }
  }

  navigation(path: string) {
    this.router.navigateByUrl(path)
  }

}
