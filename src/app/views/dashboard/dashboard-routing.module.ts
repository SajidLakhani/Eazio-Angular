import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ChatDashboardComponent } from './chat-dashboard/chat-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: UserDashboardComponent,
  },
  {
    path: 'chat',
    component: ChatDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
