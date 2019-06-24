import { SafeResourceUrl } from '@angular/platform-browser';

export interface INgxGalleryOrderedImage {
    src: string | SafeResourceUrl;
    type: string;
    index: number;
}

export class NgxGalleryOrderedImage implements INgxGalleryOrderedImage {
    src: string | SafeResourceUrl;
    type: string;
    index: number;

    constructor(obj: INgxGalleryOrderedImage) {
        this.src = obj.src;
        this.type = obj.type;
        this.index = obj.index;
    }
}
