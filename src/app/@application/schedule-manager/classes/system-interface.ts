import { firestore } from 'firebase';

export interface PersonName {
    fullname?: string
    title?: string
    firstname?: string
    middlename?: string
    lastname?: string       
}

export interface DriverScheduleObj{
    busModel?: string
    busNumber?: string
    createdBy?: string
    creationDate?: firestore.Timestamp
    driverID?: string
    driverName?: string
    endTime?: firestore.Timestamp
    inspector?: string
    route?: string
    scheduleDate?: string
    startTime?: firestore.Timestamp
    time: string
    statusInfo: StatusInfo
    via: Array<string>
}

interface StatusInfo{
    checkedInTime?: firestore.Timestamp
    checkedOutTime?: firestore.Timestamp
    isCheckedIn?: boolean
    isCheckedOut?: boolean
    progressBarMeterValue?: number
    status?: string
}

export interface DriverScheduleDataTableColumns{
    date: Date
    busId: string
    routeNumber: string
    routeDescription: string
    driverName: string
    duration: string 
    assignedBy: string 
    action: string
}
