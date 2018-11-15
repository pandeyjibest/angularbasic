import { CommonModule } from '@angular/common';
import {MaterialModule} from './modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
// import { WebStorageModule } from 'ngx-store';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {RouterModule} from '@angular/router';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [
  HeaderComponent,
  FooterComponent,
  Error404PageComponent,
  HomePageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    // WebStorageModule,
    RouterModule
  ],
  exports:[
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    HeaderComponent,
    FooterComponent,
    RouterModule
    // WebStorageModule
  ]
})
export class SharedModule { }
