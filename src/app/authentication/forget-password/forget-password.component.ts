import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ForgetPasswordDialogPopupComponent } from '@authentication/forget-password-dialog-popup/forget-password-dialog-popup.component';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  animal: string;
  name: string;

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
  }

  navigate = ()=>{
    this.router.navigateByUrl("auth/login")
  }

  /**
   * Function to create and reset password
   */
  create = ()=>{}

  openDialog(): void {
    const dialogRef = this.dialog.open(ForgetPasswordDialogPopupComponent, {
      width: '400px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}


