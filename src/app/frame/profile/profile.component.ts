import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isOpen: boolean;
  constructor() { }

  ngOnInit() {
    this.isOpen = true;
  }

  openDrawer(){
    this.isOpen = !this.isOpen
  }
}
