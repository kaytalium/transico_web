import { Injectable, Query } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { BusFleet } from '../classes/system-interface';

@Injectable({ 
    providedIn: 'root'
  })
export class BusDepotService {

    
  /**
   * @type {Observable<BusToDriver>} driverSchedule
   * @type {AngularFirestoreCollection<DriverSchedule>} driverScheduleCollection
   */
  private busFleet: Observable<BusFleet | null>
  private busFleetCollection: AngularFirestoreCollection<BusFleet>

   /**
     * @constructor DatabaseConnect
     * @param {AngularFirestore} afs
     * @param {AngularFireAuth} afAuth
     * 
     */

     constructor(private afs: AngularFirestore){
        this.busFleetCollection = this.afs.collection('fleet_inventory')
     }

     public get(): Observable<BusFleet[]>{
        return this.busFleetCollection.valueChanges()
     }
}
