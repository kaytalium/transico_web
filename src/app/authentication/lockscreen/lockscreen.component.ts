import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserObject } from '@component/interface';
import { User } from '@component/User.class';
import { RoutePath } from '@helper/helper';
import { ActiveUserLog } from '@helper/helper';


@Component({
  selector: 'lockscreen',
  templateUrl: './lockscreen.component.html',
  styleUrls: ['./lockscreen.component.css']
})
export class LockscreenComponent implements OnInit {


  users: Array<User>

  activeUser: User


  /**
   * 
   * @param router 
   */
  constructor(private router: Router, private additionalUsers: ActiveUserLog, private route: RoutePath) {
    // console.log(additionalUsers.getUserList())
  }

  ngOnInit() {
    this.users = this.additionalUsers.getUserList();
    this.activeUser = this.additionalUsers.getActiveUser()
  }

  authenticate(user: User) {
    //Authentication the user
    this.users.map((eUser: User) => {
      if(eUser.username == user.username){
        user.status = false       
        // console.log("inside map: "+user.username +" and status is: "+user.status)
      }
    });
    // this.users.push(user)

    console.log(user.username )

  }

  navigation(path: string) {
    this.router.navigateByUrl(path)
  }

  /**
   * This function handles the updating of the selected user 
   * @param user 
   */
  onAdditionalUserClick(user: User) {
    this.activeUser = user
  }

}
