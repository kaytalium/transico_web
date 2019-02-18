import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'bus-schedule',
  templateUrl: './bus-schedule.component.html',
  styleUrls: ['./bus-schedule.component.css']
})
export class BusScheduleComponent implements OnInit {

  displayedColumns = ['date', 'busId', 'routeNumber', 'routeDescription', 'driverName', 'duration','assignedBy','action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA)

  @ViewChild(MatSort) sort: MatSort
  constructor() { 
    
  }

  ngOnInit() {
    this.dataSource.sort = this.sort
  }

}


export interface UserData {
  date: string;
  busId: string;
  routeNumber: string;
  routeDescription: string;
  driverName: string;
  duration: string;
  assignedBy: string
  action?: string
}

export const ELEMENT_DATA: UserData[] = [
  {date: "Feb 1", busId: '16U7865', routeNumber: '02', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart', action: "icons"},
  {date: "Feb 1", busId: '16U7863', routeNumber: '99', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Steven Hart'},
  {date: "Feb 1", busId: '16U1865', routeNumber: '77', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Billy Hart'},
  {date: "Feb 1", busId: '16U4865', routeNumber: '56', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Bobby Hart'},
  {date: "Feb 1", busId: '16U4565', routeNumber: '32', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U5165', routeNumber: '56', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '63', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7860', routeNumber: '77', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  {date: "Feb 1", busId: '16U7865', routeNumber: '83', routeDescription: 'Half way Tree - Downtown', driverName:'John Brown', duration:'5:00 am - 9:00 am', assignedBy:'Kevin Hart'},
  
  // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];