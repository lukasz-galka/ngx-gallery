import { Component, Input, HostListener, ViewChild, OnInit, HostBinding } from '@angular/core';

import { NgxGalleryThumbnailsComponent } from './ngx-gallery-thumbnails.component';
import { NgxGalleryPreviewComponent } from './ngx-gallery-preview.component';

import { NgxGalleryOptions } from './ngx-gallery-options.model';
import { NgxGalleryImage } from './ngx-gallery-image.model';

@Component({
    selector: 'ngx-gallery',
    templateUrl: './ngx-gallery.component.html',
    styleUrls: ['./ngx-gallery.component.scss']
})
export class NgxGalleryComponent implements OnInit {
    @Input() options: NgxGalleryOptions[];
    @Input() images: NgxGalleryImage[];

    smallImages: string[];
    mediumImages: string[];
    bigImages: string[];
    descriptions: string[];

    selectedIndex: number = 0;
    previewEnabled: boolean;

    currentOptions: NgxGalleryOptions;

    private breakpoint: number = undefined;
    private prevBreakpoint: number = undefined;

    @ViewChild(NgxGalleryThumbnailsComponent) thumbnails: NgxGalleryThumbnailsComponent;
    @ViewChild(NgxGalleryPreviewComponent) preview: NgxGalleryPreviewComponent;

    @HostBinding('style.width') width: string;
    @HostBinding('style.height') height: string;

    ngOnInit() {

        this.smallImages = this.images.map(img => img.small);
        this.mediumImages = this.images.map(img => img.medium);
        this.bigImages = this.images.map(img => img.big);
        this.descriptions = this.images.map(img => img.description);

        this.options = this.options.map(opt => new NgxGalleryOptions(opt));
        this.sortOptions();
        this.setBreakpoint();
        this.setOptions();
    }

    @HostListener('window:resize') onResize() {
        this.setBreakpoint();

        if (this.prevBreakpoint !== this.breakpoint) {
            this.setOptions();
            this.thumbnails.setDefaultPosition();
        }
    }

    getImageHeight(): string {
        return this.currentOptions.imagePercent + '%';
    }

    getThumbnailsHeight(): string {
        return 'calc(' + this.currentOptions.thumbnailsPercent + '% - '
            + this.currentOptions.thumbnailsMargin + 'px)';
    }

    getThumbnailsMargin(): string {
        return this.currentOptions.thumbnailsMargin + 'px';
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

    private combineOptions(first, second) {
        Object.keys(second).map(val => first[val] = second[val] !== undefined ? second[val] : first[val]);
    }
}
