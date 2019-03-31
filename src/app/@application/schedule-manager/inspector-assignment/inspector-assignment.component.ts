import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InspectorScheduleService } from '../classes/inspector-schedule-service';
import { DBRoute, SystemUser, Terminal, InspectorInputFormData } from '../classes/system-interface';
import { MatDialogRef } from '@angular/material';
import { NewInspectorScheduleEntry } from '../classes/NewInspectorScheduleEntry';

@Component({
  selector: 'app-inspector-assignment',
  templateUrl: './inspector-assignment.component.html',
  styleUrls: ['./inspector-assignment.component.css'],
  providers: [InspectorScheduleService]
})
export class InspectorAssignmentComponent implements OnInit {
  myForm: FormGroup
  dbRoutes: Array<DBRoute>
  inspectors: Array<SystemUser>
  terminals: Array<Terminal>
  newInspectoryEntry: NewInspectorScheduleEntry

  constructor(private formBuilder: FormBuilder, private inspectorService: InspectorScheduleService,
    public dialogRef: MatDialogRef<InspectorAssignmentComponent>) {
    this.myForm = this.formBuilder.group({
      inspector: ['', Validators.compose([
        Validators.required,
      ])],
      terminal: ['', [Validators.required]],
      assignDate: ['', [Validators.required]],
      routeNumber: ['',[Validators.required]],
     });
   }

  ngOnInit() {
    this.inspectorService.getRoutes().subscribe(res=>{
      this.dbRoutes = res;
    })

    this.inspectorService.getInspectors().subscribe(res=>{
      this.inspectors = res;
    })

    this.inspectorService.getTerminals().subscribe(res=>{
      this.terminals = res;
    })
  }

  onSubmit(formValue: InspectorInputFormData){    
    if(this.myForm.valid){
      console.log("OnSubmit: "+formValue.routeNumber)
      this.newInspectoryEntry = new NewInspectorScheduleEntry(formValue, this.inspectors)      
      this.inspectorService.createNewAssignment(this.newInspectoryEntry.getInspectorDetail())
      this.dialogRef.close();
    }

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
