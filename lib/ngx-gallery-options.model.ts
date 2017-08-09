import { NgxGalleryAnimation } from './ngx-gallery-animation.model';
import { NgxGalleryImageSize } from './ngx-gallery-image-size.model';

export interface INgxGalleryOptions {
    width?: string;
    height?: string;
    breakpoint?: number;
    fullWidth?: boolean;
    image?: boolean;
    imageBelowThumbnails?: boolean;
    imagePercent?: number;
    imageArrows?: boolean;
    imageArrowsAutoHide?: boolean;
    imageSwipe?: boolean;
    imageAnimation?: string;
    imageSize?: string;
    imageMargin?: number;
    thumbnails?: boolean;
    thumbnailsColumns?: number;
    thumbnailsRows?: number;
    thumbnailsPercent?: number;
    thumbnailsMargin?: number;
    thumbnailsArrows?: boolean;
    thumbnailsArrowsAutoHide?: boolean;
    thumbnailsSwipe?: boolean;
    thumbnailMargin?: number;
    thumbnailSize?: string;
    preview?: boolean;
    previewDescription?: boolean;
    previewSwipe?: boolean;
    previewFullscreen?: boolean;
    previewCloseOnClick?: boolean;
    previewCloseOnEsc?: boolean;
    previewKeyboardNavigation?: boolean;
    arrowPrevIcon?: string;
    arrowNextIcon?: string;
    closeIcon?: string;
    fullscreenIcon?: string;
    spinnerIcon?: string;
}

export class NgxGalleryOptions implements INgxGalleryOptions {
    width?: string;
    height?: string;
    breakpoint?: number;
    fullWidth?: boolean;
    image?: boolean;
    imageBelowThumbnails?: boolean;
    imagePercent?: number;
    imageArrows?: boolean;
    imageArrowsAutoHide?: boolean;
    imageSwipe?: boolean;
    imageAnimation?: string;
    imageSize?: string;
    imageMargin?: number;
    thumbnails?: boolean;
    thumbnailsColumns?: number;
    thumbnailsRows?: number;
    thumbnailsPercent?: number;
    thumbnailsMargin?: number;
    thumbnailsArrows?: boolean;
    thumbnailsArrowsAutoHide?: boolean;
    thumbnailsSwipe?: boolean;
    thumbnailMargin?: number;
    thumbnailSize?: string;
    preview?: boolean;
    previewDescription?: boolean;
    previewSwipe?: boolean;
    previewFullscreen?: boolean;
    previewCloseOnClick?: boolean;
    previewCloseOnEsc?: boolean;
    previewKeyboardNavigation?: boolean;
    arrowPrevIcon?: string;
    arrowNextIcon?: string;
    closeIcon?: string;
    fullscreenIcon?: string;
    spinnerIcon?: string;

    constructor(obj: INgxGalleryOptions) {

        const preventDefaults = obj.breakpoint === undefined ? false : true;

        function use<T>(source: T, defaultValue: T): T {
            return obj && (source !== undefined || preventDefaults) ? source : defaultValue;
        }

        this.breakpoint = use(obj.breakpoint, undefined);
        this.width = use(obj.width, '500px');
        this.height = use(obj.height, '400px');
        this.fullWidth = use(obj.fullWidth, false);

        this.image = use(obj.image, true);
        this.imageBelowThumbnails = use(obj.imageBelowThumbnails, false);
        this.imagePercent = use(obj.imagePercent, 75);
        this.imageArrows = use(obj.imageArrows, true);
        this.imageArrowsAutoHide = use(obj.imageArrowsAutoHide, false);
        this.imageSwipe = use(obj.imageSwipe, false);
        this.imageAnimation = use(obj.imageAnimation, NgxGalleryAnimation.Fade);
        this.imageSize = use(obj.imageSize, NgxGalleryImageSize.Cover);
        this.imageMargin = use(obj.imageMargin, 10);

        this.thumbnails = use(obj.thumbnails, true);
        this.thumbnailsColumns = use(obj.thumbnailsColumns, 4);
        this.thumbnailsRows = use(obj.thumbnailsRows, 1);
        this.thumbnailsPercent = use(obj.thumbnailsPercent, 25);
        this.thumbnailsMargin = use(obj.thumbnailsMargin, 10);
        this.thumbnailsArrows = use(obj.thumbnailsArrows, true);
        this.thumbnailsArrowsAutoHide = use(obj.thumbnailsArrowsAutoHide, false);
        this.thumbnailsSwipe = use(obj.thumbnailsSwipe, false);
        this.thumbnailMargin = use(obj.thumbnailMargin, 10);
        this.thumbnailSize = use(obj.thumbnailSize, NgxGalleryImageSize.Cover);

        this.preview = use(obj.preview, true);
        this.previewDescription = use(obj.previewDescription, true);
        this.previewSwipe = use(obj.previewSwipe, false);
        this.previewFullscreen = use(obj.previewFullscreen, false);
        this.previewCloseOnClick = use(obj.previewCloseOnClick, false);
        this.previewCloseOnEsc = use(obj.previewCloseOnEsc, false);
        this.previewKeyboardNavigation = use(obj.previewKeyboardNavigation, false);

        this.arrowPrevIcon = use(obj.arrowPrevIcon, 'fa fa-arrow-circle-left');
        this.arrowNextIcon = use(obj.arrowNextIcon, 'fa fa-arrow-circle-right');
        this.closeIcon = use(obj.closeIcon, 'fa fa-times-circle');
        this.fullscreenIcon = use(obj.fullscreenIcon, 'fa fa-arrows-alt');
        this.spinnerIcon = use(obj.spinnerIcon, 'fa fa-spinner fa-pulse fa-3x fa-fw');
    }
}
