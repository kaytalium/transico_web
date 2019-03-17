import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportManagerComponent } from './report-manager/report-manager.component';
import { NavigationTagModule } from '@src/app/@component/navigation-tag';

@NgModule({
  declarations: [ReportManagerComponent],
  imports: [
    CommonModule,
    NavigationTagModule
  ],
  exports: [ReportManagerComponent]
})
export class ReportManagerModule { }
