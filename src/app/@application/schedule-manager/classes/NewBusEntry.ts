import { BusInputFormData, NewBusDialogData, BusFleet } from './system-interface';
import { firestore } from 'firebase';

export class NewBusEntry{

    private detail: BusFleet
    constructor(formData: BusInputFormData, depotInfo: NewBusDialogData){
        let myDate = new Date(formData.serviceDate+"T00:00:00")
        let ftimestamp: firestore.Timestamp = firestore.Timestamp.fromDate(myDate)
        this.detail = {
            depot: depotInfo.depotName,
            busModel: formData.busModel,
            condition: formData.condition,
            lastService: ftimestamp,
            seatCount: formData.seatCount,
            routeNumber: (typeof formData.routeNumber == null || formData.routeNumber == ""?"":formData.routeNumber)
        }
    }

    getBusDetail(): BusFleet{
        return this.detail;
    }
}