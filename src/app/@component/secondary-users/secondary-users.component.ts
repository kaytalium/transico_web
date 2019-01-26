import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'secondary-users',
  templateUrl: './secondary-users.component.html',
  styleUrls: ['./secondary-users.component.css']
})
export class SecondaryUsersComponent implements OnInit {

  @Input() src: string
  @Input() initials: string
  @Input() username: string
  info: object
  constructor() { }

  ngOnInit() {

    console.log("Value from user: "+this.src)
  }

  

}
