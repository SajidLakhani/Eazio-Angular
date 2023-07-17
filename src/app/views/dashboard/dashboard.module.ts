import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [UserDashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, ComponentsModule],
})
export class DashboardModule {}
