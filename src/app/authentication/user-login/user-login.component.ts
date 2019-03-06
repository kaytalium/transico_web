import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { RoutePath } from '@src/app/@helper/helper';
import { DatabaseConnect } from '@authentication/DatabaseConnect';
import { database } from 'firebase';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  providers:[DatabaseConnect]
})
export class UserLoginComponent implements OnInit {

  myForm: FormGroup
  
  

  constructor(private router: Router, private formBuilder: FormBuilder, private route: RoutePath, private database: DatabaseConnect) {
    this.myForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(25)]],
      username: ['', [Validators.required, Validators.email]]
     });

  }

  ngOnInit() {}

  navigate = (path: string) => {
    this.router.navigateByUrl(path)
  }

  login(formValues){
    if(this.myForm.valid){
      this.database.SignIn(formValues.username,formValues.password)
      .then((result) => {
        this.router.navigateByUrl(this.route.application);
     }).catch((error) => {
       window.alert(error.message)
     })
    }
  }

}
