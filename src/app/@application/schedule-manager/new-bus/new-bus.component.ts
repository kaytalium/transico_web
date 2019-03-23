import { Component, OnInit, Inject } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { NewDepotService } from '../services/new-depot-service';
import { Observable } from 'rxjs';
import { Parish, NewDepotInterface, BusDepot } from '../classes/system-interface';
import { CodeGeneration } from '../classes/CodeGeneration';
import { BusDepotClass } from '../classes/BusDepot';
import { NewDepotEntry } from '../classes/NewDepotEntry';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-new-bus',
  templateUrl: './new-bus.component.html',
  styleUrls: ['./new-bus.component.css'],
  providers: [NewDepotService, CodeGeneration, BusDepotClass]
})
export class NewBusComponent implements OnInit {

  myForm: FormGroup

  parishes: Array<Parish>
  depotID: string;
  NewDepot: NewDepotEntry = new NewDepotEntry();


  constructor(private depotDB: NewDepotService, 
    private codeGeneration: CodeGeneration, 
    private newDepot: BusDepotClass,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<NewBusComponent>,
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
