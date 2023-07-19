import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardNavBarComponent } from './dashboard-nav-bar/dashboard-nav-bar.component';
import { AuthNavbarComponent } from './auth-navbar/auth-navbar.component';
import { AuthLeftSideComponent } from './auth-left-side/auth-left-side.component';
import { DashboardLeftNavbarComponent } from './dashboard-left-navbar/dashboard-left-navbar.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';

@NgModule({
  declarations: [
    DashboardNavBarComponent,
    AuthNavbarComponent,
    AuthLeftSideComponent,
    DashboardLeftNavbarComponent,
    ProfileComponentComponent,
  ],
  imports: [CommonModule],
  exports: [
    DashboardNavBarComponent,
    AuthNavbarComponent,
    AuthLeftSideComponent,
    DashboardLeftNavbarComponent,
    ProfileComponentComponent,
  ],
})
export class ComponentsModule {}
