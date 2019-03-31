import { Injectable } from "@angular/core";
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { DBRoute, SystemUser, Terminal, InspectorSchedule } from './system-interface';
import { query } from '@angular/core/src/render3';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class InspectorScheduleService{

    inspectorCollection: AngularFirestoreCollection<SystemUser>;
    routeCollection: AngularFirestoreCollection<DBRoute>
    terminalCollection: AngularFirestoreCollection<Terminal>

    inspectorScheduleCollection: AngularFirestoreCollection<InspectorSchedule>


    constructor(private afs: AngularFirestore){
        this.inspectorCollection = afs.collection('system_users', query=>query.where("userType","==","Inspector"))
        this.routeCollection = afs.collection('routes')
        this.terminalCollection = afs.collection('terminals')
        this.inspectorScheduleCollection = afs.collection('inspector_schedule')
    }

    getInspectors(): Observable<SystemUser[]>{
        return this.inspectorCollection.valueChanges();
    }

    getRoutes(): Observable<DBRoute[]>{
        return this.routeCollection.valueChanges()
    }

    getTerminals(): Observable<Terminal[]>{
        return this.terminalCollection.valueChanges()
    }

    getInspectorSchedules(): Observable<InspectorSchedule[]>{
        return this.inspectorScheduleCollection.valueChanges()
    }

    createNewAssignment(info: InspectorSchedule){
        this.inspectorScheduleCollection.add(info)
    }
}