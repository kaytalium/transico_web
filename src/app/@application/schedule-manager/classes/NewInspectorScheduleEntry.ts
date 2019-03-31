import {
  InspectorSchedule,
  InspectorInputFormData,
  SystemUser
} from "./system-interface";
import { firestore } from 'firebase';

export class NewInspectorScheduleEntry {
  private detail: InspectorSchedule;
  constructor(formData: InspectorInputFormData, inspector: Array<SystemUser>) {
    let myDate = new Date(formData.assignDate+"T00:00:00")
    console.log("My Time: "+myDate)
    let ftimestamp: firestore.Timestamp = firestore.Timestamp.fromDate(myDate)

    this.detail = {
      assignDate: ftimestamp,
      name: formData.inspector,
      routeNumber: formData.routeNumber,
      terminal: formData.terminal,
      staffID: this.staffID(formData.inspector, inspector).staffID
    }
  }

  getInspectorDetail(): InspectorSchedule {
    return this.detail;
  }

  private staffID(inspector: string, inspectors: Array<SystemUser>): SystemUser {
      let argument: SystemUser
     inspectors.forEach(arg=>{
          if(arg.fullname == inspector){
              argument = arg
          }
      })
      return argument     
  }

 
}
