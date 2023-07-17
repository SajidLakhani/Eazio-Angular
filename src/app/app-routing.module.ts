import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => {
      return import('./views/auth/auth.module').then((m) => m.AuthModule);
    },
  },
  {
    path: 'dashboard',
    loadChildren: () => {
      return import('./views/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      );
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
