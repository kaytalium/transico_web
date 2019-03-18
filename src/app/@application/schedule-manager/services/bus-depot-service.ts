import { Injectable, Query } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { BusFleet, BusDepot } from '../classes/system-interface';

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

  private busDepotCollection: AngularFirestoreCollection<BusDepot>

   /**
     * @constructor DatabaseConnect
     * @param {AngularFirestore} afs
     * @param {AngularFireAuth} afAuth
     * 
     */

     constructor(private afs: AngularFirestore){
        this.busDepotCollection = this.afs.collection("depot", query=>query.orderBy("depotName"))
     }

     public getBusFromDepot(depotName: string): Observable<BusFleet[]>{
      this.busFleetCollection = this.afs.collection('fleet_inventory', query=>query.where("depotName","==",depotName).orderBy("depot", "asc").orderBy("condition","asc"))
        return this.busFleetCollection.valueChanges()
     }

     public getDepot(): Observable<BusDepot[]>{
       return this.busDepotCollection.valueChanges()
     }
}
