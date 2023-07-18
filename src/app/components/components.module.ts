import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardNavBarComponent } from './dashboard-nav-bar/dashboard-nav-bar.component';
import { AuthNavbarComponent } from './auth-navbar/auth-navbar.component';
import { AuthLeftSideComponent } from './auth-left-side/auth-left-side.component';

@NgModule({
  declarations: [
    DashboardNavBarComponent,
    AuthNavbarComponent,
    AuthLeftSideComponent,
  ],
  imports: [CommonModule],
  exports: [
    DashboardNavBarComponent,
    AuthNavbarComponent,
    AuthLeftSideComponent,
  ],
})
export class ComponentsModule {}
