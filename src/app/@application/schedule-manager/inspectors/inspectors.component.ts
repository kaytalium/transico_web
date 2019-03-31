import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatTableDataSource, MatDialog } from "@angular/material";
import { InspectorAssignmentComponent } from "../inspector-assignment/inspector-assignment.component";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { InspectorScheduleService } from "../classes/inspector-schedule-service";
import { InspectorSchedule } from "../classes/system-interface";

@Component({
  selector: "app-inspectors",
  templateUrl: "./inspectors.component.html",
  styleUrls: ["./inspectors.component.css"],
  providers: [InspectorScheduleService]
})
export class InspectorsComponent implements OnInit {
  displayedColumns: string[] = [
    "staffID",
    "name",
    "terminal",
    "date",
    "route",
    "action"
  ];
  dataSource;
  searchCount: number;
  dataSize: number;

  constructor(
    public dialog: MatDialog,
    private inspectorService: InspectorScheduleService
  ) {
    this.inspectorService.getInspectorSchedules().subscribe(res => {
      this.dataSource = new MatTableDataSource<InspectorSchedule>(res);
    });
  }

  // @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.searchCount = this.dataSource.filteredData.length;
    this.dataSize = this.dataSource.data.length;
  }

  scheduleInspector() {
    const dialogRef = this.dialog.open(InspectorAssignmentComponent, {
      width: "800px",
      height: "540px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
}


