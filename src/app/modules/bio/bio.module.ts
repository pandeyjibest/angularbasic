import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './pages/profile/profile.component';
import { UsersComponent } from './pages/users/users.component';
import { SharedModule } from '../../shared/shared.module';
import { BioRoutingModule } from './bio-routing.module';

@NgModule({
  declarations: [
  ProfileComponent,
  UsersComponent],
  imports: [
    BrowserModule,
    SharedModule,
    BioRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class BioModule { }
