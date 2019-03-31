import { Inject, Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { DBRoute, BusFleet } from '../classes/system-interface';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';


@Injectable({
    providedIn: "root"
})

export class NewBusService{

    private routeCollection: AngularFirestoreCollection<DBRoute>
    private fleetCollection: AngularFirestoreCollection<BusFleet>

    constructor(private afs: AngularFirestore){
        this.routeCollection = afs.collection('routes');
        this.fleetCollection = afs.collection('fleet_inventory');
    }

    getRoute(): Observable<DBRoute[]>{
        return this.routeCollection.valueChanges();
    }

    createNewBus(busFleet: BusFleet){
        this.fleetCollection.add(busFleet);
    }
}