import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { FrameComponent } from './frame/frame.component';
import { FrameRoutingModule } from './frame-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';

//Material Design links
import {MatIconModule} from '@angular/material/icon';
import { NotificationItemComponent } from './notification-item/notification-item.component';
import { AvatarComponent } from './avatar/avatar.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [FrameComponent, HeaderComponent, SidebarComponent, UserSettingsComponent, SearchBarComponent, NotificationComponent, ProfileComponent, NotificationItemComponent, AvatarComponent, SearchResultComponent, FooterComponent],
  imports: [
    CommonModule,
    FrameRoutingModule,
    MatIconModule,
    FormsModule
  ],
  exports: [FrameRoutingModule]
})
export class MainFrameModule { }
