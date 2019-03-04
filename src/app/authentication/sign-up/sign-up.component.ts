import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators, FormGroup, FormGroupDirective, NgForm} from '@angular/forms';
import { RoutePath } from '@src/app/@helper/helper';
import { DatabaseConnect } from '../DatabaseConnect';
import { SignupData, User } from '@authentication/interface';
import { ErrorStateMatcher } from '@angular/material';


export interface Jobs {
  name: string;
  hint: string;
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers:[DatabaseConnect]
})
export class SignUpComponent implements OnInit {

  public signUpForm: FormGroup
  public matcher = new MyErrorStateMatcher

  public jobs: Jobs[] = [
    {name: 'Administrator', hint: 'Full access to the system'},
    {name: 'Supervisor', hint: 'medium access to information'},
    {name: 'Inspector', hint: 'Low access to information'},
  ];

  //var to store value from inout form
  userInput: SignupData
  mesg: string 
  constructor(private router: Router, private routePath: RoutePath, private dataHolder: DatabaseConnect) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      name: new FormControl("",[Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email]),
      position: new FormControl('Position',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      retype_password: new FormControl('',[Validators.required])
    })
  }

  public hasError = (controlName: string, errorName: string): boolean =>{
    return this.signUpForm.controls[controlName].hasError[errorName]
  }

  backToLogin = (path: number)=>{
    this.router.navigateByUrl(this.routePath.login)
  }

  registerNewUser(formValues){
    
    if(this.signUpForm.valid){
      
      this.userInput = {
        userType: formValues.position.name,
        fullname: formValues.name,
        email: formValues.email,
        password: formValues.password
      }

      
      this.dataHolder.SignUp(this.userInput)
      .then((result) => {
        window.alert("You have been successfully registered!");
        //Create additional information in the database for the user in order to have a profile of the user.
        this.dataHolder.create(this.dataHolder.prepareDataForStorage(this.userInput,result.user.uid))

        //redirect to login and allow users to use there new password to login
        this.backToLogin(1);

      }).catch((error) => {
        window.alert(error.message)
      })
        

    }
    
      
  }

 

}

/**
 * For the signup button we need disable it until all the inputs are validated 
 * at which point we can process the data entered.
 */
