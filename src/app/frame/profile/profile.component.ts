import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isOpen: boolean;
  isSettingDrawOpen: boolean;
  route: object;
  constructor(public router: Router) { }

  ngOnInit() {
    this.isOpen = true;
    this.route = {
      switch: "auth/login",
      lock: "auth/lock_screen",
      logout: "auth/login"
    }
  }

  openDrawer() {
    if (this.isSettingDrawOpen) {
      this.isSettingDrawOpen = false
    } else {
      this.isOpen = !this.isOpen
    }

  }

  openSubMenu() {
    this.isSettingDrawOpen = !this.isSettingDrawOpen
    this.isOpen = true
  }

  navigate(path: string) {
    this.router.navigateByUrl(path)
  }

  onClose(e) {
    this.isSettingDrawOpen = e;
    if (!this.isSettingDrawOpen)
      this.isOpen = false
  }
}
