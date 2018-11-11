import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Error404PageComponent} from './shared/pages/error404-page/error404-page.component';
import {HomePageComponent} from './shared/pages/home-page/home-page.component';
import {AppConfig} from './config/app.config';

const routes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  {path: AppConfig.routes.bio, loadChildren: './modules/bio/bio.module#BioModule'},
  {path: AppConfig.routes.error404, component: Error404PageComponent},

  // otherwise redirect to 404
  {path: '**', redirectTo: '/' + AppConfig.routes.error404}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })
],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
