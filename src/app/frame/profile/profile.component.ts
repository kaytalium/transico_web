import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'profile', 
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() outsideClick: boolean = false
  isOpen: boolean;
  isSettingDrawOpen: boolean;
  route: object;
  constructor(public router: Router) { 
    
  }

  ngOnInit() {
    this.isOpen = true;
    this.route = {
      switch: "auth/login",
      lock: "auth/lock_screen",
      logout: "auth/login"
    }
  }

  ngOnChanges(){

    // console.log("This is isOpen is drawer before changes: "+this.isOpen)
    // console.log("This is outsideClick before changes: "+this.outsideClick)

    
    if(this.outsideClick){
      this.isOpen = true
      // console.log("inside if: "+this.isOpen)
    }
    
    // if(!this.isOpen && this.outsideClick){
    //   console.log("inside if: "+this.isOpen)
    //   this.isOpen = true
    // }
    // this.openDrawer()
    // this.isOpen = this.outsideClick
    
    // console.log("This is isOpen is drawer after changes: "+this.isOpen)

  }


  openDrawer() {
    if (this.isSettingDrawOpen) {
      this.isSettingDrawOpen = false
    }     
    else {      
      this.isOpen = !this.isOpen
    }
    // console.log("Inside drawer logics isOpen states: "+this.isOpen)

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
