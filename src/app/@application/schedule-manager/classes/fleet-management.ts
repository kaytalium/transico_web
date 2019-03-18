import { BusFleet, BusFleetDataTableColumns } from './system-interface';

export class FleetManagement {

    private collection: Array<BusFleet> = []
    constructor(){}

    setCollection(collection: Array<BusFleet>): void{
        this.collection = collection
    }

    getCollection(): Array<BusFleetDataTableColumns>{
        
        let tableData: Array<BusFleetDataTableColumns> = []
        this.collection.forEach(res=>{
            // console.log("Data in class: "+ res.busModel)

            tableData.push({
                modelNumber: res.busModel,
                lastService: (typeof res.lastService =='undefined'?new Date():res.lastService.toDate()),
                depot: res.depot,
                routeNumber: res.routeNumber,
                condition: res.condition,
                seatCount: res.seatCount,
            })
                
        })
        return tableData
    }


}
