import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@src/app/@component/User.class';


@Component({
  selector: 'active-user-form',
  templateUrl: './active-user-form.component.html',
  styleUrls: ['./active-user-form.component.css'],
  
})
export class ActiveUserFormComponent implements OnInit {

  @Output() close: EventEmitter<any> = new EventEmitter();
  @Input() userData: User

  constructor(private router: Router) { }

  ngOnInit() {
    // console.log("this is user data in AUF: "+this.userData.imageSrc)
    
  }

  onClose(){
    this.close.emit('close');
  }

  navigate(){
    this.router.navigateByUrl('application')
  }

  ngOnChanges(){
    // console.log("onChanges: this is user data in AUF: "+this.userData.imageSrc)
  }

}
