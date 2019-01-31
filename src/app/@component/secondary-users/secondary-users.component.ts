import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { User } from '@component/User.class';


@Component({
  selector: 'secondary-users',
  templateUrl: './secondary-users.component.html',
  styleUrls: ['./secondary-users.component.css']
})
export class SecondaryUsersComponent implements OnInit {

  @Input('userObject') userObject: User
  @Input() color: string
  @Input() size: string
  @Input() displayName: string
  @Output() userClick: EventEmitter<User> = new EventEmitter<User>()


  @ViewChild('main_container') main_container;
  isActive: boolean;
  align: string;
  constructor() { }

  ngOnInit() {
    this.init()
  }

  ngOnChanges() {
    this.init()
    // console.log(this.userObject.username + " data has changed to: "+ this.userObject.status)
  }

  onClick() {
    //validate the user password and then update the userObject to with typed password before sending out of the components
    this.userClick.emit(this.userObject)
  }

  init() {
    this.isActive = false
    // console.log(this.userObject)

    if (this.color == 'dark') {
      // console.log(this.main_container)
      this.main_container.nativeElement.style.setProperty('color', "#000");
    } else {
      this.main_container.nativeElement.style.setProperty('color', "#fff");
    }

    if (this.userObject.status) {
      this.isActive = true
      // console.log("Status was found: ", this.isActive)
    } else {
      this.isActive = false
    }

    if (this.displayName == null) {
      this.displayName = "right"
    } else {
      this.align = "center"
    }
  }
}
