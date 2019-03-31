import { Component, OnInit, Inject } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { NewBusService } from '../services/new-bus-service';
import { Observable } from 'rxjs';
import { Parish, NewBusDialogData, DBRoute, BusInputFormData } from '../classes/system-interface';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NewDepotEntry } from '../classes/NewDepotEntry';
import { NewBusEntry } from '../classes/NewBusEntry';


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
  providers: [NewBusService]
})
export class NewBusComponent implements OnInit {

  myForm: FormGroup

  dbRoutes: Array<DBRoute>
  depotID: string;
  newBusEntry: NewBusEntry


  constructor(private busService: NewBusService, 
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<NewBusComponent>,
    @Inject(MAT_DIALOG_DATA) public data: NewBusDialogData
   ) { 
     
      this.myForm = this.formBuilder.group({
        busModel: ['', Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]{2}[A-Z]{1}?[0-9]{4}$')
        ])],
        condition: ['', [Validators.required]],
        serviceDate: ['', [Validators.required]],
        seatCount: ['', [Validators.required]],
        routeNumber: [''],
       });
  
    }

  ngOnInit() {
    // get the list of route from the database
    this.busService.getRoute().subscribe(res=>{
      this.dbRoutes = res;      
    })
  }

  onSubmit(formValue: BusInputFormData){    
    if(this.myForm.valid){
      console.log("OnSubmit: "+formValue.routeNumber)
      this.newBusEntry = new NewBusEntry(formValue, this.data)      
      this.busService.createNewBus(this.newBusEntry.getBusDetail())
      this.dialogRef.close();
    }

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
