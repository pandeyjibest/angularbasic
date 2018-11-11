import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const galleryRoutes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild(galleryRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class GalleryRoutingModule {
}
