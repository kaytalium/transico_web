import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HelperModule, RoutePath, ActiveUserLog } from '@helper/helper';


//Firebase connection
import { AngularFireModule } from '@angular/fire'
import { environment } from "../environments/environment"
import { AngularFirestoreModule } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HelperModule,
    AngularFireModule.initializeApp(environment.firebase,"transico-app"),
    AngularFirestoreModule
  ],
  providers: [RoutePath, ActiveUserLog],
  bootstrap: [AppComponent]
})
export class AppModule { }
