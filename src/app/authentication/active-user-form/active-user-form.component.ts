import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@src/app/@component/User.class';
import { RoutePath } from '@src/app/@helper/helper';
import { Validate, PasswordValidator } from '@src/app/@helper/PasswordValidator';


@Component({
  selector: 'active-user-form',
  templateUrl: './active-user-form.component.html',
  styleUrls: ['./active-user-form.component.css'],
  
})
export class ActiveUserFormComponent implements OnInit {

  @ViewChild('passwordEl') passwordEl: ElementRef
  @ViewChild('messageEl') messageEl: ElementRef

  @Output() close: EventEmitter<any> = new EventEmitter();
  @Input() userData: User

  validate: Validate = {}
  errorClass: string

  constructor(private router: Router, private routePath: RoutePath, private passwordValidator: PasswordValidator ) { }

  ngOnInit() {
    // console.log("this is user data in AUF: "+this.userData.imageSrc)
    
  }

  onClose(){
    this.close.emit('close');
  }

  onLogin(){

    this.checkPassword(this.passwordEl.nativeElement.value)
    
    if(!this.validate.isError){
      //connect to the database and validate user       
      this.router.navigateByUrl(this.routePath.application)
    }

  }


  ngOnChanges(){
    // console.log("onChanges: this is user data in AUF: "+this.userData.imageSrc)
  }

  onKey(e: any){
    this.checkPassword(e.target.value)
  }

  private checkPassword(password: string){
    this.validate = this.passwordValidator.validate(password)
    if(this.validate.isError){
       this.errorClass = "error"
    }else{
     this.errorClass = "success"
    } 
  }

}
