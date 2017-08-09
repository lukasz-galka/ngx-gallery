import { Component, Input, HostListener, ViewChild, OnInit,
    HostBinding, DoCheck, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

import { NgxGalleryPreviewComponent } from './ngx-gallery-preview.component';
import { NgxGalleryHelperService } from './ngx-gallery-helper.service';

import { NgxGalleryOptions } from './ngx-gallery-options.model';
import { NgxGalleryImage } from './ngx-gallery-image.model';

@Component({
    selector: 'ngx-gallery',
    templateUrl: './ngx-gallery.component.html',
    styleUrls: ['./ngx-gallery.component.scss'],
    providers: [ NgxGalleryHelperService ]
})
export class NgxGalleryComponent implements OnInit, DoCheck, AfterViewInit {
    @Input() options: NgxGalleryOptions[];
    @Input() images: NgxGalleryImage[];

    @Output() change = new EventEmitter();

    smallImages: string[] | SafeResourceUrl[];
    mediumImages: string[] | SafeResourceUrl;
    bigImages: string[] | SafeResourceUrl[];
    descriptions: string[];

    oldImages: NgxGalleryImage[];
    oldImagesLength: number = 0;

    selectedIndex: number = 0;
    previewEnabled: boolean;

    currentOptions: NgxGalleryOptions;

    private breakpoint: number = undefined;
    private prevBreakpoint: number = undefined;
    private fullWidthTimeout: any;

    @ViewChild(NgxGalleryPreviewComponent) preview: NgxGalleryPreviewComponent;

    @HostBinding('style.width') width: string;
    @HostBinding('style.height') height: string;
    @HostBinding('style.left') left: string;

    constructor(private myElement: ElementRef) {}

    ngOnInit() {
        this.options = this.options.map(opt => new NgxGalleryOptions(opt));
        this.sortOptions();
        this.setBreakpoint();
        this.setOptions();
        this.checkFullWidth();
    }

    ngDoCheck(): void {
        if (this.images !== undefined && (this.images.length !== this.oldImagesLength)
            || (this.images !== this.oldImages)) {
            this.oldImagesLength = this.images.length;
            this.oldImages = this.images;
            this.setImages();
        }
    }

    ngAfterViewInit(): void {
        this.checkFullWidth();
    }

    @HostListener('window:resize') onResize() {
        this.setBreakpoint();

        if (this.prevBreakpoint !== this.breakpoint) {
            this.setOptions();
        }

        if (this.currentOptions.fullWidth) {

            if (this.fullWidthTimeout) {
                clearTimeout(this.fullWidthTimeout);
            }

            this.fullWidthTimeout = setTimeout(() => {
                this.checkFullWidth();
            }, 200);
        }
    }

    getImageHeight(): string {
        return this.currentOptions.thumbnails ? this.currentOptions.imagePercent + '%' : '100%';
    }

    getThumbnailsHeight(): string {
        if (this.currentOptions.image) {
            return 'calc(' + this.currentOptions.thumbnailsPercent + '% - '
            + this.currentOptions.thumbnailsMargin + 'px)';
        } else {
            return '100%';
        }
    }

    getThumbnailsMargin(): string {
        return this.currentOptions.thumbnailsMargin + 'px';
    }

    getImageMargin(): string {
        return this.currentOptions.imageMargin + 'px';
    }

    openPreview(index: number): void {
        this.previewEnabled = true;
        this.preview.open(index);
    }

    onClosePreview(): void {
        this.previewEnabled = false;
    }

    select(index: number) {
        this.selectedIndex = index;

        this.change.emit({
            index: index,
            image: this.images[index]
        });

        if (!this.currentOptions.image && this.currentOptions.thumbnails && this.currentOptions.preview) {
            this.openPreview(this.selectedIndex);
        }
    }

    private checkFullWidth(): void {
        if (this.currentOptions.fullWidth) {
            this.width = document.body.clientWidth + 'px';
            this.left = (-(document.body.clientWidth -
                this.myElement.nativeElement.parentNode.innerWidth) / 2) + 'px';
        }
    }

    private setImages(): void {
        this.smallImages = this.images.map(img => img.small);
        this.mediumImages = this.images.map(img => img.medium);
        this.bigImages = this.images.map(img => img.big);
        this.descriptions = this.images.map(img => img.description);
    }

    private setBreakpoint(): void {

        this.prevBreakpoint = this.breakpoint;

        const breakpoints = this.options.filter(opt => opt.breakpoint >= window.innerWidth)
            .map(opt => opt.breakpoint);

        if (breakpoints.length) {
            this.breakpoint = breakpoints.pop();
        } else {
            this.breakpoint = undefined;
        }
    }

    private sortOptions(): void {
        this.options = [
            ...this.options.filter(a => a.breakpoint === undefined),
            ...this.options
                .filter(a => a.breakpoint !== undefined)
                .sort((a, b) => b.breakpoint - a.breakpoint)
        ];
    }

    private setOptions(): void {
        this.currentOptions = new NgxGalleryOptions({});

        this.options
            .filter(opt => opt.breakpoint === undefined || opt.breakpoint >= this.breakpoint)
            .map(opt => this.combineOptions(this.currentOptions, opt));

        this.width = this.currentOptions.width;
        this.height = this.currentOptions.height;
    }

    private combineOptions(first: NgxGalleryOptions, second: NgxGalleryOptions) {
        Object.keys(second).map(val => first[val] = second[val] !== undefined ? second[val] : first[val]);
    }
}
