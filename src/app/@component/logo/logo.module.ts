import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { CompanyNameDirective } from './company-name.directive';
import { CompanyNameComponent } from './company-name/company-name.component'

@NgModule({
  declarations: [LogoComponent, CompanyNameDirective, CompanyNameComponent],
  imports: [
    CommonModule
  ],
  exports:[LogoComponent, CompanyNameComponent]
})
export class LogoModule { }