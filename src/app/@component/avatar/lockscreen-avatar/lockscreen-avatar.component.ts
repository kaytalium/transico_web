import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { User } from '../../User.class';
import { Router } from '@angular/router';
import { isError } from 'util';

@Component({
  selector: 'lockscreen-avatar',
  templateUrl: './lockscreen-avatar.component.html',
  styleUrls: ['./lockscreen-avatar.component.css']
})
export class LockscreenAvatarComponent implements OnInit {

  // user data 
  @Input() user: User;

  // user data 
  @Output() onClick: EventEmitter<User> = new EventEmitter<User>();

   
  //validation error
  error: string 
  isError: boolean = false
  
  
  @ViewChild('passwordEl') passwordEl: ElementRef;
  @ViewChild('message') message: ElementRef;

  
  constructor() { }

  ngOnInit() {}

  /**
   * This function is the onclick for login the user or navigating the user to where ever they want to go
   * 
   */
  navigation(){
    let password: string = this.passwordEl.nativeElement.value
    
    //Once the user hit the login button we also need to validate on click
    //The check will set the isError if no error kthen set password and export user object
    this.checkPassword(password)

    if(!this.isError){
      this.user.password = password
      this.onClick.emit(this.user)
      // console.log("This is the class password: "+this.user.password)
    }
  }


  onKey(e: any){
    this.checkPassword(e.target.value)
  }

  private checkPassword(password: string){
    
    // console.log(password.length)
    if(password.length > 7 ){
      this.message.nativeElement.style.setProperty('visibility', 'hidden')
      this.isError = false
    }else if(password.length > 0 && password.length < 7){
      this.error = "Password must be at least 8 characters"
      this.message.nativeElement.style.setProperty('visibility', 'visible')
      this.isError = true
    }else if(password.length == 0){
      this.message.nativeElement.style.setProperty('visibility', 'visible')
      this.error = "Please provide a password"
      this.isError = true
    }
    // console.log('this is keyboard event: '+password)
  }

}