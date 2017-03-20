export interface INgxGalleryImage {
    small?: string;
    medium?: string;
    big?: string;
    description?: string;
}

export class NgxGalleryImage implements INgxGalleryImage {
    small?: string;
    medium?: string;
    big?: string;
    description?: string;

    constructor(obj: INgxGalleryImage) {
        this.small = obj.small;
        this.medium = obj.medium;
        this.big = obj.big;
        this.description = obj.description;
    }
}
