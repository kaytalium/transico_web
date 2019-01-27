import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { UserObject } from '@component/interface';
import { User } from '@component/User.class';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  additionalUsers: Array<UserObject> = []

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      confirmPassword: ['']
    }, { validator: this.checkPasswords });

  }

  public route: object
  myForm: FormGroup
  matcher = new MyErrorStateMatcher();
  ngOnInit() {
    this.route = {
      signup: "auth/signup",
      forget: "auth/forget_password",
      dashboard: "application"
    }

    this.additionalUsers.push(
      new User({
        username: "Alexis Ohanian",
        imageSrc: '../../../assets/img/alexis.jpg',
        initials: "KC",
        status: true
      }));

    this.additionalUsers.push(
      new User({
        username: "Jimmy Fallon",
        imageSrc: '../../../assets/img/jimmy.jpg',
        initials: "JF",
        status: false
      }));

    this.additionalUsers.push(
      new User({
        username: "Kaley Cuoco",
        imageSrc: '../../../assets/img/kaley.jpg',
        initials: "KC",
        status: false
      }));
  }

  navigate = (path: string) => {
    this.router.navigateByUrl(path)
  }

  checkPasswords(group: FormGroup) {

  }

}


