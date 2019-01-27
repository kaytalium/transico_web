import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';


//Material Design links
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

//Custom Component links
import { AvatarModule } from "@component/avatar";
import { NavigationTagModule } from '@component/navigation-tag'

// Application Module Links
import { DashboardModule } from '@application/dashboard'
import { ScheduleManagerModule } from '@application/schedule-manager'
import { VehicleManagerModule } from '@application/vehicle-manager'
import { MaintenanceManagerModule } from '@application/maintenance-manager'
import { ReportManagerModule } from '@application/report-manager'


//Components
import { FrameComponent } from './frame/frame.component';
import { FrameRoutingModule } from './frame-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationItemComponent } from './notification-item/notification-item.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { FooterComponent } from './footer/footer.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    FrameComponent, 
    HeaderComponent, 
    SidebarComponent, 
    UserSettingsComponent, 
    SearchBarComponent, 
    NotificationComponent, 
    ProfileComponent, 
    NotificationItemComponent, 
    SearchResultComponent, 
    FooterComponent, 
    SettingsComponent, 
  ],
  imports: [
    CommonModule,
    FrameRoutingModule,
    MatIconModule,
    FormsModule,
    MatInputModule, 
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    AvatarModule,
    NavigationTagModule,
    DashboardModule,
    ScheduleManagerModule,
    VehicleManagerModule,
    MaintenanceManagerModule,
    ReportManagerModule
  
  ],
  exports: [FrameRoutingModule]
})
export class MainFrameModule { }
