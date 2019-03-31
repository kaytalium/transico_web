import { Component, OnInit } from '@angular/core';
import { NewDepotService } from '../services/new-depot-service';
import { CodeGeneration } from '../classes/CodeGeneration';
import { BusDepotClass } from '../classes/BusDepot';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Parish } from '../classes/system-interface';
import { NewDepotEntry } from '../classes/NewDepotEntry';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'new-depot',
  templateUrl: './new-depot.component.html',
  styleUrls: ['./new-depot.component.css'],
  providers: [NewDepotService, CodeGeneration, BusDepotClass]
})
export class NewDepotComponent implements OnInit {

  myForm: FormGroup

  parishes: Array<Parish>
  depotID: string;
  NewDepot: NewDepotEntry = new NewDepotEntry();

  constructor(private depotDB: NewDepotService, 
    private codeGeneration: CodeGeneration, 
    private newDepot: BusDepotClass,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<NewDepotComponent>,
   ) { 
     
      this.myForm = this.formBuilder.group({
        color: ['', [Validators.required]],
        depotName: ['', [Validators.required]],
        capacity: ['', [Validators.required]],
        streetAddress: ['', [Validators.required]],
        town: ['', [Validators.required]],
        city: ['', [Validators.required]],
        parish: ['', [Validators.required]],
       });
  
    }

  ngOnInit() {
    this.depotDB.getParishes().subscribe(res=>{
      this.parishes = res;      
    })

    this.depotID = this.codeGeneration.generateCode(6)
  }

  onSubmit(formValue){    
    if(this.myForm.valid){
      console.log("OnSubmit: "+formValue)
      
      
      this.myForm.reset()
      
      this.myForm.markAsPristine()
      this.myForm.markAsUntouched()
      this.myForm.updateValueAndValidity()
      
      // this.depotDB.createNewDepot(this.NewDepot.getDetail())
    }

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
