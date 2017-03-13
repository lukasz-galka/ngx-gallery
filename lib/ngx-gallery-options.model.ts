export interface INgxGalleryOptions {
    width?: string;
    height?: string;
    breakpoint?: number;
    imagePercent?: number;
    imageArrows?: boolean;
    imageArrowsAutoHide?: boolean;
    thumbnailsColumns?: number;
    thumbnailsPercent?: number;
    thumbnailsMargin?: number;
    thumbnailsArrows?: boolean;
    thumbnailsArrowsAutoHide?: boolean;
    thumbnailMargin?: number;
    preview?: boolean;
}

export class NgxGalleryOptions implements INgxGalleryOptions {
    width?: string;
    height?: string;
    breakpoint?: number;
    imagePercent?: number;
    imageArrows?: boolean;
    imageArrowsAutoHide?: boolean;
    thumbnailsColumns?: number;
    thumbnailsPercent?: number;
    thumbnailsMargin?: number;
    thumbnailsArrows?: boolean;
    thumbnailsArrowsAutoHide?: boolean;
    thumbnailMargin?: number;
    preview?: boolean;

    constructor(obj: INgxGalleryOptions) {

        const preventDefaults = obj.breakpoint === undefined ? false : true;

        function use<T>(source: T, defaultValue: T): T {
            return obj && (source !== undefined || preventDefaults) ? source : defaultValue;
        }

        this.breakpoint = use(obj.breakpoint, undefined);
        this.width = use(obj.width, '500px');
        this.height = use(obj.height, '400px');

        this.imagePercent = use(obj.imagePercent, 70);
        this.imageArrows = use(obj.imageArrows, true);
        this.imageArrowsAutoHide = use(obj.imageArrowsAutoHide, false);

        this.thumbnailsColumns = use(obj.thumbnailsColumns, 4);
        this.thumbnailsPercent = use(obj.thumbnailsPercent, 30);
        this.thumbnailsMargin = use(obj.thumbnailsMargin, 10);
        this.thumbnailsArrows = use(obj.thumbnailsArrows, true);
        this.thumbnailsArrowsAutoHide = use(obj.thumbnailsArrowsAutoHide, false);
        this.thumbnailMargin = use(obj.thumbnailMargin, 10);

        this.preview = use(obj.preview, true);
    }
}
