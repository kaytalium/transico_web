import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HelperModule, RoutePath, ActiveUserLog } from '@helper/helper'



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HelperModule
  ],
  providers: [RoutePath, ActiveUserLog],
  bootstrap: [AppComponent]
})
export class AppModule { }
