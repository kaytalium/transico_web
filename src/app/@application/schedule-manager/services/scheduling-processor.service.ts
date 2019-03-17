import { Injectable, Query } from '@angular/core';
import { DriverScheduleObj } from '../classes/system-interface';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({ 
  providedIn: 'root'
})
export class SchedulingProcessorService {

  /**
   * @type {Observable<BusToDriver>} driverSchedule
   * @type {AngularFirestoreCollection<DriverSchedule>} driverScheduleCollection
   */
  private driverSchedule: Observable<DriverScheduleObj | null>
  private driverScheduleCollection: AngularFirestoreCollection<DriverScheduleObj>

   /**
     * @constructor DatabaseConnect
     * @param {AngularFirestore} afs
     * @param {AngularFireAuth} afAuth
     * 
     */
  constructor(private afs: AngularFirestore, afAuth: AngularFireAuth) {
    this.driverScheduleCollection = this.afs.collection('driver_schedule', query=>
        query.orderBy('route',"desc").orderBy('startTime',"desc")
    );
   }

   public get(): Observable<DriverScheduleObj[]>{
     return this.driverScheduleCollection.valueChanges()
   }

   public _get(query: Query): AngularFirestoreCollection<DriverScheduleObj>{
     return this.driverScheduleCollection
   }


}
