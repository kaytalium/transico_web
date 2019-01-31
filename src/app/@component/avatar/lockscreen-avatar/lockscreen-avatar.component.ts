import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { User } from '../../User.class';
import { PasswordValidator } from '@helper/helper';
import { Validate } from '@src/app/@helper/PasswordValidator';

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
  validate:Validate ={}
  
  
  @ViewChild('passwordEl') passwordEl: ElementRef;
  @ViewChild('message') message: ElementRef;

  
  constructor(private passwordValidator: PasswordValidator) { }

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

    if(!this.validate.isError){
      this.user.password = password
      this.onClick.emit(this.user)
      // console.log("This is the class password: "+this.user.password)
    }
  }


  onKey(e: any){
    this.checkPassword(e.target.value)
  }

  private checkPassword(password: string){
    this.validate = this.passwordValidator.validate(password)
    if(this.validate.isError){
        this.passwordEl.nativeElement.style.setProperty('border', 'visible')
    }else{
      this.passwordEl.nativeElement.style.setProperty('visibility', 'hidden')
    } 
  }
   

}