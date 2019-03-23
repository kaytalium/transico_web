import { Address, BusDepot } from './system-interface';

export class NewDepotEntry{

    
    constructor(
        public defaultColor? : string,
        public depotName?: string,
        public capacity?: number,
        public streetNumber?: string,
        public streetName?: string,
        public city?: string,
        public parish?: string
    ){}

    private init(){
        return {
            percentage: 0,
            value: 0
        }
    }

    getDetail(): BusDepot{
        return {
            defaultColor: this.defaultColor,
            depotName: this.depotName,
            capacity: this.capacity,
            busCount: 0,
            address: {
                streetNumber: this.streetNumber,
                streetName: this.streetName,
                city: this.city,
                parish: this.parish
            },
            running: this.init(),
            assign: this.init(),
            unassigned: this.init(),
            repair: this.init(),
            nonRepairable: this.init()
        }
    }

}