import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  //public vars
  public isOpen: boolean;
  public isCount: string;
  public count: string;

  constructor() { }

  ngOnInit() {
    //get the count of the notification that have not bseen read by this user
    this.count = "9+"

    //set the draw to hidden true 
    this.isOpen = true;
    
  }



  /**
   * Function to toggle drawer open/close
   * 
   */
  openDrawer = (e: Event) => {

    //toggle the draw to open close on click
    this.isOpen = !this.isOpen

    //whenever this function gets call hide the badge of the notification bell
    this.isCount = "hide";
  }

}
