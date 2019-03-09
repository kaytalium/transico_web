import { Timestamp } from 'rxjs';
import { PersonName, DriverScheduleDataTableColumns } from './system-interface';
import { DriverScheduleObj } from './system-interface'

export class DriverSchedule {

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
    public getCollection(): Array<DriverScheduleDataTableColumns>{

        let tableData: Array<DriverScheduleDataTableColumns> = []
        this.collection.forEach(res=>{
            console.log("Data in class: "+ res.creationDate)

            tableData.push({
                date: (typeof res.startTime.toDate()=='undefined'?new Date():res.startTime.toDate()),
                busId: res.busModel,
                routeNumber: res.busNumber,
                routeDescription: res.route,
                driverName: res.driverName,
                duration: res.time,
                assignedBy: (typeof res.createdBy == 'undefined'?"John Doe":res.createdBy),
                action: ''
            })
                
        })
        return tableData
    }

    

}
