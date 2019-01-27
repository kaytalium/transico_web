import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportManagerComponent } from './report-manager/report-manager.component';

@NgModule({
  declarations: [ReportManagerComponent],
  imports: [
    CommonModule
  ],
  exports: [ReportManagerComponent]
})
export class ReportManagerModule { }
