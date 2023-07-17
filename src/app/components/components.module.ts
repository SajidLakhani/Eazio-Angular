import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardNavBarComponent } from './dashboard-nav-bar/dashboard-nav-bar.component';

@NgModule({
  declarations: [DashboardNavBarComponent],
  imports: [CommonModule],
  exports: [DashboardNavBarComponent],
})
export class ComponentsModule {}
