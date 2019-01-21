import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameComponent } from './frame/frame.component';
import { FrameRoutingModule } from './frame-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [FrameComponent, HeaderComponent, SidebarComponent, UserSettingsComponent, SearchBarComponent],
  imports: [
    CommonModule,
    FrameRoutingModule
  ],
  exports: [FrameRoutingModule]
})
export class MainFrameModule { }
