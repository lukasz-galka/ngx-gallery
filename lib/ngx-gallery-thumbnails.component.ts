import { Component, Input, Output, EventEmitter, HostListener, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
    selector: 'ngx-gallery-thumbnails',
    templateUrl: './ngx-gallery-thumbnails.component.html',
    styleUrls: ['./ngx-gallery-thumbnails.component.scss']
})
export class NgxGalleryThumbnailsComponent implements OnChanges {

    thumbnailsLeft: string;
    mouseenter: boolean;

    @Input() images: string[];
    @Input() columns: number;
    @Input() arrows: boolean;
    @Input() arrowsAutoHide: boolean;
    @Input() margin: number;
    @Input() selectedIndex: number;

    @Output() onActiveChange = new EventEmitter();

    private index = 0;

    constructor(private sanitization: DomSanitizer) {}

    ngOnChanges(changes: SimpleChanges): void {
        if(changes['selectedIndex']) {
            this.validateIndex();
        }
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.mouseenter = true;
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.mouseenter = false;
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
        return this.index + this.columns < this.images.length ? true : false;
    }

    canMoveLeft(): boolean {
        return this.index !== 0 ? true : false;
    }

    getThumbnailPos(index: number): SafeStyle {
        return this.sanitization.bypassSecurityTrustStyle('calc(' + ((100 / this.columns) * index)
            + '% + ' + ((this.margin - (((this.columns - 1)
            * this.margin) / this.columns)) * index) + 'px)');
    }

    getThumbnailWidth(): SafeStyle {
        if (this.margin != 0) {
            return this.sanitization.bypassSecurityTrustStyle('calc(' + (100 / this.columns) + '% - '
                + (((this.columns - 1) * this.margin)
                / this.columns) + 'px)');
        } else {
            return this.sanitization.bypassSecurityTrustStyle('calc(' + (100 / this.columns) + '% + 1px)');
        }
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
        if(this.arrows && this.images && this.images.length > this.columns
            && (!this.arrowsAutoHide || this.mouseenter)) {
            return true;
        } else {
            return false;
        }
    }

    validateIndex(): void {
        if(this.selectedIndex < this.index
            || this.selectedIndex >= this.index + this.columns) {

            let index = this.selectedIndex;

            if(index > this.images.length - this.columns) {
                this.index = this.images.length - this.columns;
            } else {
                this.index = index;
            }

            this.setThumbnailsPosition();
        }
    }
}
