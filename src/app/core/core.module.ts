import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    CommonModule
  ],
  exports: [
    BrowserAnimationsModule,
    HttpClientModule
  ]
})
export class CoreModule { }
