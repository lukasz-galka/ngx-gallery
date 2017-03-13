export interface INgxGalleryImage {
    small: string;
    medium: string;
    big: string;
}

export class NgxGalleryImage implements INgxGalleryImage {
    small: string;
    medium: string;
    big: string;

    constructor(obj: INgxGalleryImage) {
        this.small = obj.small;
        this.medium = obj.medium;
        this.big = obj.big;
    }
}
