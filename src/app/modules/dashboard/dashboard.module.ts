import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    DashboardRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: []
})
export class DashboardModule { }
