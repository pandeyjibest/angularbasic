import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './pages/profile/profile.component';
import {UsersComponent} from './pages/users/users.component';

const heroesRoutes: Routes = [
  {path: '', component: UsersComponent},
  {path: ':id', component: ProfileComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class BioRoutingModule {
}
