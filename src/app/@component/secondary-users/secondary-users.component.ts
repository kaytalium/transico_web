import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { User } from '@component/User.class';

@Component({
  selector: 'secondary-users',
  templateUrl: './secondary-users.component.html',
  styleUrls: ['./secondary-users.component.css']
})
export class SecondaryUsersComponent implements OnInit {

  @Input() userObject: User
  @Input() color: string
  @Input() size: string
  @Input() displayName: string
  

  @ViewChild('main_container') main_container;
  isActive: boolean;
  align: string;
  constructor() { }

  ngOnInit() {
   this.isActive = false
   console.log(this.userObject)

   
  }

  ngAfterViewInit(){
    if(this.color == 'dark'){
      // console.log(this.main_container)
      this.main_container.nativeElement.style.setProperty('color', "#000");
    }else{
      this.main_container.nativeElement.style.setProperty('color', "#fff");
    }

    if(this.userObject.status){
        this.isActive = true
        console.log("Status was found: ",this.isActive)
    }

    if(this.displayName == null){
      this.displayName = "right"
    }else{
      this.align = "center"
    }
  }

}
