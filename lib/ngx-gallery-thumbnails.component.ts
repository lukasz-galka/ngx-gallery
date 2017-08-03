import { Component, Input, Output, EventEmitter, HostListener, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import { DomSanitizer, SafeStyle, SafeResourceUrl } from '@angular/platform-browser';

import { NgxGalleryHelperService } from './ngx-gallery-helper.service';

@Component({
    selector: 'ngx-gallery-thumbnails',
    templateUrl: './ngx-gallery-thumbnails.component.html',
    styleUrls: ['./ngx-gallery-thumbnails.component.scss']
})
export class NgxGalleryThumbnailsComponent implements OnChanges {

    thumbnailsLeft: string;
    mouseenter: boolean;

    @Input() images: string[] | SafeResourceUrl[];
    @Input() columns: number;
    @Input() rows: number;
    @Input() arrows: boolean;
    @Input() arrowsAutoHide: boolean;
    @Input() margin: number;
    @Input() selectedIndex: number;
    @Input() clickable: boolean;
    @Input() swipe: boolean;
    @Input() size: string;
    @Input() arrowPrevIcon: string;
    @Input() arrowNextIcon: string;

    @Output() onActiveChange = new EventEmitter();

    private index = 0;

    constructor(private sanitization: DomSanitizer, private elementRef: ElementRef,
        private helperService: NgxGalleryHelperService) {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['images']) {
            this.selectedIndex = 0;
            this.index = 0;
        }

        if (changes['selectedIndex']) {
            this.validateIndex();
        }

        if (changes['swipe']) {
            this.helperService.manageSwipe(this.swipe, this.elementRef,
            'thumbnails', () => this.moveRight(), () => this.moveLeft());
        }
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.mouseenter = true;
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.mouseenter = false;
    }

    @HostListener('window:resize') onResize() {
        this.setDefaultPosition();
    }

    handleClick(event: Event, index: number): void {
        this.selectedIndex = index;
        this.onActiveChange.emit(index);

        event.stopPropagation();
        event.preventDefault();
    }

    moveRight(): void {
        if (this.canMoveRight()) {
            this.index++;
            this.setThumbnailsPosition();
        }
    }

    moveLeft(): void {
        if (this.canMoveLeft()) {
            this.index--;
            this.setThumbnailsPosition();
        }
    }

    canMoveRight(): boolean {
        return this.index + this.columns < this.getMaxIndex() ? true : false;
    }

    canMoveLeft(): boolean {
        return this.index !== 0 ? true : false;
    }

    getThumbnailLeft(index: number): SafeStyle {
        const calculatedIndex = Math.floor(index / this.rows);
        return this.getThumbnailPosition(calculatedIndex, this.columns);
    }

    getThumbnailTop(index: number): SafeStyle {
        const calculatedIndex = index % this.rows;
        return this.getThumbnailPosition(calculatedIndex, this.rows);
    }

    getThumbnailWidth(): SafeStyle {
        return this.getThumbnailDimension(this.columns);
    }

    getThumbnailHeight(): SafeStyle {
        return this.getThumbnailDimension(this.rows);
    }

    setThumbnailsPosition(): void {
        this.thumbnailsLeft = 'calc(-' + ((100 / this.columns) * this.index)
            + '% - ' + ((this.margin - (((this.columns - 1)
            * this.margin) / this.columns)) * this.index) + 'px)';
    }

    setDefaultPosition(): void {
        this.thumbnailsLeft = '0px';
    }

    canShowArrows(): boolean {
        if (this.arrows && this.images && this.images.length > this.getVisibleCount()
            && (!this.arrowsAutoHide || this.mouseenter)) {
            return true;
        } else {
            return false;
        }
    }

    validateIndex(): void {
        const newIndex = Math.floor(this.selectedIndex / this.rows);

        if (newIndex < this.index || newIndex >= this.index + this.columns) {
            const maxIndex = this.getMaxIndex() - this.columns;
            this.index = newIndex > maxIndex ? maxIndex : newIndex;

            this.setThumbnailsPosition();
        }
    }

    private getThumbnailPosition(index: number, count: number): SafeStyle {
        return this.getSafeStyle('calc(' + ((100 / count) * index) + '% + '
            + ((this.margin - (((count - 1) * this.margin) / count)) * index) + 'px)');
    }

    private getThumbnailDimension(count: number): SafeStyle {
        if (this.margin !== 0) {
            return this.getSafeStyle('calc(' + (100 / count) + '% - '
                + (((count - 1) * this.margin) / count) + 'px)');
        } else {
            return this.getSafeStyle('calc(' + (100 / count) + '% + 1px)');
        }
    }

    private getMaxIndex(): number {
        return Math.ceil(this.images.length / this.rows);
    }

    private getVisibleCount(): number {
        return this.columns * this.rows;
    }

    private getSafeStyle(value: string): SafeStyle {
        return this.sanitization.bypassSecurityTrustStyle(value);
    }
}
