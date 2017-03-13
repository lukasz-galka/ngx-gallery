import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxGalleryArrowsComponent } from './ngx-gallery-arrows.component';
import { NgxGalleryImageComponent } from './ngx-gallery-image.component';
import { NgxGalleryThumbnailsComponent } from './ngx-gallery-thumbnails.component';
import { NgxGalleryPreviewComponent } from './ngx-gallery-preview.component';
import { NgxGalleryComponent } from './ngx-gallery.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        NgxGalleryArrowsComponent,
        NgxGalleryImageComponent,
        NgxGalleryThumbnailsComponent,
        NgxGalleryPreviewComponent,
        NgxGalleryComponent
    ],
    exports: [
        NgxGalleryComponent
    ]
})
export class NgxGalleryModule { }

