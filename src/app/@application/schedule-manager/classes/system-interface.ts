import { firestore } from "firebase";

export interface PersonName {
  fullname?: string;
  title?: string;
  firstname?: string;
  middlename?: string;
  lastname?: string;
}

export interface DriverScheduleObj {
  busModel?: string;
  busNumber?: string;
  createdBy?: string;
  creationDate?: firestore.Timestamp;
  driverID?: string;
  driverName?: string;
  endTime?: firestore.Timestamp;
  inspector?: string;
  route?: string;
  scheduleDate?: string;
  startTime?: firestore.Timestamp;
  time: string;
  statusInfo: StatusInfo;
  via: Array<string>;
}

interface StatusInfo {
  checkedInTime?: firestore.Timestamp;
  checkedOutTime?: firestore.Timestamp;
  isCheckedIn?: boolean;
  isCheckedOut?: boolean;
  progressBarMeterValue?: number;
  status?: string;
}

export interface RouteSchedule {
  route: string;
  schedules: Array<Schedule>;
}

export interface Schedule {
  assignDate: Date;
  driverName: string;
  duration: string;
  routeNumber: string;
  modelNumber: string;
  progressAmount: number;
}

export interface BusRoute {
  number?: string;
  terminals?: {
    a: TerminalNodes;
    b: TerminalNodes;
    c?: TerminalNodes;
  };
  via?: Array<string>;
}

interface TerminalNodes {
  code?: string;
  location?: string;
}

export interface RouteNumber {
  value: string | number;
  viewValue: string;
}

/**
 * Bus Route Assignment Stats Interface
 */
export interface BusRouteAssignmentStats {
  routeNumber?: string;
  status?: BusStatus;
}

interface BusStatus {
  total: number;
  assign: number;
  unassign: number;
}

/**
 * Bus Route Assignment with Inspector info and Driver to be assigned
 */
export interface BusAndRouteAssignment {
  routeNumber?: string;
  busModel?: string;
  driverAssign?: string;
  endTime?: firestore.Timestamp;
  startTime?: firestore.Timestamp;
  status?: string;
  inspectors?: Inspectors;
}

interface Inspectors {
  inspector1: InspectorDetail;
  inspector2: InspectorDetail;
}

interface InspectorDetail {
  loaction: string;
  locationCode: string;
  name: string;
}

/**
 * Fleet Inventory
 */
export interface BusFleet {
  depot: string;
  busModel: string;
  condition: string;
  lastService: firestore.Timestamp;
  routeNumber: string;
  seatCount: number;
}

export interface BusFleetDataTableColumns {
  modelNumber: string;
  depot: string;
  routeNumber: string;
  condition: string;
  lastService: Date;
  seatCount: number;
}

export interface BusDepot {
  defaultColor: string;
  busCount?: number;
  capacity: number;
  depotName: string;
  address: Address;
  nonRepairable?: BusStats;
  repair?: BusStats;
  running?: BusStats;
  assign?: BusStats;
  unassigned?: BusStats;
}

export interface Address {
  streetNumber: string;
  streetName: string;
  parish: string;
  city: string;
}

export interface BusStats {
  percentage: number;
  value: number;
}

export interface Parish {
  value: string;
}

export interface NewDepotInterface {
  depotID: string
  depotName: string
  capacity: number
  address: {
    streetNumber: string
    streetName: string
    city: string
    parish: string
  }
}


export interface NewBusDialogData {
  depotName: string,
  userID?: string
}

export interface DBRoute{
  number: string
}

export interface BusInputFormData{
  busModel: string
  condition: string
  serviceDate: Date
  seatCount: number
  routeNumber: string

}

export interface SystemUser{
  email: string
  fullname: string
  staffID: string
  uid: string
  userType: string
}

export interface InspectorInputFormData{
  inspector: string;
  terminal: string;
  assignDate: Date;
  routeNumber: string
}

export interface Terminal{
  name: string
  terminalID: string
}

export interface InspectorSchedule{
  assignDate: firebase.firestore.Timestamp
  name: string
  routeNumber: string
  staffID: string
  terminal:string
}
