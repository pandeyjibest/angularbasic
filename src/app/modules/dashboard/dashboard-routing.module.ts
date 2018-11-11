import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const dashboardRoutes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class DashboardRoutingModule {
}
