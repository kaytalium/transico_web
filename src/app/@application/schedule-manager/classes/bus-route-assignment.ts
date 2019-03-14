import { BusAndRouteAssignment } from './system-interface';

export class BusDetail{
public modelNumber: string
public status: string
public inspector1: {
    name: string
    locationCode: string
}
public inspector2: {
    name: string
    locationCode: string
}
    constructor(public info: BusAndRouteAssignment){
        this.modelNumber = info.busModel
        this.status = info.status
        this.inspector1 = info.inspectors.inspector1
        this.inspector2 = info.inspectors.inspector2
        
    }
}