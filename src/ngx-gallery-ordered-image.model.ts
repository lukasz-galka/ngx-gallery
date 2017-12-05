import { SafeResourceUrl } from '@angular/platform-browser';

export interface INgxGalleryOrderedImage {
    src: string | SafeResourceUrl;
    index: number;
}

export class NgxGalleryOrderedImage implements INgxGalleryOrderedImage {
    src: string | SafeResourceUrl;
    index: number;

    constructor(obj: INgxGalleryOrderedImage) {
        this.src = obj.src;
        this.index = obj.index;
    }
}
