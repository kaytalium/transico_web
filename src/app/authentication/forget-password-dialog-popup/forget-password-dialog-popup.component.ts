import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogData } from '@authentication/forget-password/forget-password.component';

@Component({
  selector: 'forget-password-dialog-popup',
  templateUrl: './forget-password-dialog-popup.component.html',
  styleUrls: ['./forget-password-dialog-popup.component.css']
})
export class ForgetPasswordDialogPopupComponent{

  
  info: Array<Object> = [
    {
      title:"Confirmation",
      message:"An email has been sent. Please check your inbox and follow the instructions to reset your password.",
    },
    {
      title: "Error",
      message:"We could not find a username matching your request."
    }    
  ]

 
  constructor(
    public dialogRef: MatDialogRef<ForgetPasswordDialogPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    onNoClick(): void {
      this.dialogRef.close();
    }

}