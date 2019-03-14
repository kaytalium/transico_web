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


export interface BusRoute{
    number?: string,
    terminals?: {
        a: TerminalNodes,
        b: TerminalNodes,
        c?: TerminalNodes
    }
    via?: Array<string>
}

interface TerminalNodes{
    code?: string,
    location?: string
}


export interface RouteNumber{
    value: string | number
    viewValue: string
}

/**
 * Bus Route Assignment Stats Interface
 */
export interface BusRouteAssignmentStats{
    routeNumber?: string
    status?: BusStatus
}

interface BusStatus{
    total: number
    assign: number
    unassign: number
}

/**
 * Bus Route Assignment with Inspector info and Driver to be assigned
 */
export interface BusAndRouteAssignment{
    routeNumber?: string
    busModel?: string
    driverAssign?: string
    endTime?: firestore.Timestamp
    startTime?: firestore.Timestamp
    status?: string
    inspectors?: Inspectors
}

interface Inspectors{
    inspector1: InspectorDetail
    inspector2: InspectorDetail    
}

interface InspectorDetail{
    loaction: string
    locationCode: string
    name: string
}

/**
 * Fleet Inventory 
 */
export interface BusFleet{
    depot: string
    busModel: string
    condition: string
    lastService: firestore.Timestamp
    routeNumber: string
    seatCount: number
}

export interface BusFleetDataTableColumns{
    modelNumber: string
    depot: string
    routeNumber: string
    condition: string
    lastService: Date
    seatCount: number
}