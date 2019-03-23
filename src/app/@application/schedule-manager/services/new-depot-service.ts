import { Injectable, Query } from '@angular/core';

import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Parish, BusDepot, NewDepotInterface } from '../classes/system-interface';

@Injectable({ 
  providedIn: 'root'
})

export class NewDepotService {

    private parishCollection: AngularFirestoreCollection<Parish>
    private depotCollection: AngularFirestoreCollection<BusDepot>

    constructor(private afs: AngularFirestore){
      this.parishCollection = this.afs.collection('parishes');
      this.depotCollection = this.afs.collection('depot');
    }

    getParishes(): Observable<Parish[]>{      
        return this.parishCollection.valueChanges()
    }

    createNewDepot(newDepot: BusDepot){
      this.depotCollection.add(newDepot);
    }
}

