import { Injectable } from "@angular/core";
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { BusRoute, BusRouteAssignmentStats, BusAndRouteAssignment } from './system-interface';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
    providedIn: "root"

})
export class RouteAssignment {

    /**
      * @type {Observable<BusRoute>} driverSchedule
      * @type {AngularFirestoreCollection<BusRoute>} driverScheduleCollection
      */
    private busRoutes: Observable<BusRoute | null>
    private busRoutesCollection: AngularFirestoreCollection<BusRoute>

    /**
      * @constructor DatabaseConnect
      * @param {AngularFirestore} afs
      * @param {AngularFireAuth} afAuth
      * 
      */
    constructor(private afs: AngularFirestore, afAuth: AngularFireAuth) {
        this.busRoutesCollection = this.afs.collection('routes', query =>
            query.orderBy('number', "desc")
        );
    }

    public get(): Observable<BusRoute[]>{
        return this.busRoutesCollection.valueChanges()
    }

    public getAssignmentStats(routeNumber: string): Observable<BusRouteAssignmentStats[]>{
        return this.afs.collection("bus_route_assign_stats", query=> query.where("routeNumber","==",routeNumber)).valueChanges()
    }

    public getBusAndRouteAssignment(routeNumber: string): Observable<BusAndRouteAssignment[]>{
        return this.afs.collection("bus_route_assignment", query=> query.where('routeNumber',"==",routeNumber).orderBy('status')).valueChanges()
    }
}