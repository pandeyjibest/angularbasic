import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GalleryRoutingModule } from './gallery-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    GalleryRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: []
})
export class GalleryModule { }
