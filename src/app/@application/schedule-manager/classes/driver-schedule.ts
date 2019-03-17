import { Timestamp } from 'rxjs';
import { PersonName, RouteSchedule } from './system-interface';
import { DriverScheduleObj } from './system-interface'
import { endTimeRange } from '@angular/core/src/profile/wtf_impl';

export class DriverScheduleCollection {

    /**
     * 
     */
    public creationDate: Date

    /**
     * 
     */
    public busID: string

    /**
     * 
     */
    public routeNumber: number

    /**
     * 
     */
    public routeDescription: string

    /**
     * This is the Driver Name that is being assigned
     */
    public driverName: PersonName

    /**
     * Agent or user that did the assignment 
     */
    public agentName: PersonName

    /**
     * The combination of the start and end time 
     * to create duration
     */
    public startTime: Date
    public endTime: Date

    /**
     * Duration in a string to be displayed to the user
     */
    private duration: string

    private collection: Array<DriverScheduleObj> = []

    
    /**
     * @constructor
     * Constructor
     */
    constructor() { }


    public setCollection(ds:DriverScheduleObj[]){
        this.collection = ds
    }

    //setup the collection heading to match output screen
    public getCollection(): Array<RouteSchedule>{

        let routes: Array<RouteSchedule> = []
        this.collection.forEach(res=>{
            // console.log("Data in class: "+ res.creationDate)

            // this handle the first record
            if(routes.length == 0){
                routes.push({
                    route: res.route,
                    schedules: [
                        {
                            assignDate: (typeof res.startTime.toDate()=='undefined'?new Date():res.startTime.toDate()),
                            driverName: res.driverName,
                            duration: res.time,
                            routeNumber: res.busNumber,
                            modelNumber: res.busModel,
                            progressAmount: (typeof res.statusInfo == "undefined"?0:res.statusInfo.progressBarMeterValue)
                        }
                    ]
                })
                return
            }

            // this is when the next row has the same route we update the array at that point 
            // with additional schedules
            if(routes.length > 0 && routes[routes.length-1].route == res.route){
                routes[routes.length-1].schedules.push({
                        assignDate: (typeof res.startTime.toDate()=='undefined'?new Date():res.startTime.toDate()),
                        driverName: res.driverName,
                        duration: res.time,
                        routeNumber: res.busNumber,
                        modelNumber: res.busModel,
                        progressAmount: (typeof res.statusInfo == "undefined"?0:res.statusInfo.progressBarMeterValue)
                    })
            }

            // if there this route dont match the last array route then create new index in array to facilitate a new route
            if(routes.length > 0 && routes[routes.length-1].route != res.route){
                routes.push({
                    route: res.route,
                    schedules: [
                        {
                            assignDate: (typeof res.startTime.toDate()=='undefined'?new Date():res.startTime.toDate()),
                            driverName: res.driverName,
                            duration: res.time,
                            routeNumber: res.busNumber,
                            modelNumber: res.busModel,
                            progressAmount: (typeof res.statusInfo == "undefined"?0:res.statusInfo.progressBarMeterValue)
                        }
                    ]
                })
            }
            
                
        })
        return routes
    }

    

}
