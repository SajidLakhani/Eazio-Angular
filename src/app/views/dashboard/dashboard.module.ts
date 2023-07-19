import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ChatDashboardComponent } from './chat-dashboard/chat-dashboard.component';

@NgModule({
  declarations: [UserDashboardComponent, ChatDashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, ComponentsModule],
})
export class DashboardModule {}
