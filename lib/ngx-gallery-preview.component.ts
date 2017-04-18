import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, ElementRef } from '@angular/core';

import { NgxGalleryHelperService } from './ngx-gallery-helper.service';

@Component({
    selector: 'ngx-gallery-preview',
    templateUrl: './ngx-gallery-preview.component.html',
    styleUrls: ['./ngx-gallery-preview.component.scss']
})
export class NgxGalleryPreviewComponent implements OnChanges {

    src: string;
    description: string;
    showSpinner: boolean = false;

    @Input() images: string[];
    @Input() descriptions: string[];
    @Input() showDescription: boolean;
    @Input() swipe: boolean;
    @Input() fullscreen: boolean;
    @Input() closeOnClick: boolean;

    @Output() onClose = new EventEmitter();

    private index: number = 0;
    private loadedList: string[] = [];

    constructor(private elementRef: ElementRef, private helperService: NgxGalleryHelperService) {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['swipe']) this.helperService.manageSwipe(this.swipe, this.elementRef,
            'preview', () => this.showNext(), () => this.showPrev());
    }

    open(index: number): void {
        this.index = index;
        this.show();
    }

    close(): void {
        this.manageFullscreen();
        this.onClose.emit();
    }

    loaded(): void {
        this.showSpinner = false;
        this.loadedList.push(this.src);
    }

    showNext(): void {
        if (this.canShowNext()) {
            this.index++;
            this.show();
        }
    }

    showPrev(): void {
        if (this.canShowPrev()) {
            this.index--;
            this.show();
        }
    }

    canShowNext(): boolean {
        return this.index < this.images.length - 1 ? true : false;
    }

    canShowPrev(): boolean {
        return this.index > 0 ? true : false;
    }

    manageFullscreen(): void {

        if (this.fullscreen) {

            const doc = <any>document;
            const element = <any>document.documentElement;

            if (!doc.fullscreenElement && !doc.mozFullScreenElement
                && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {

                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.msRequestFullscreen) {
                    element.msRequestFullscreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.webkitRequestFullscreen) {
                    element.webkitRequestFullscreen();
                }
            } else {
                if (doc.exitFullscreen) {
                    doc.exitFullscreen();
                } else if (doc.msExitFullscreen) {
                    doc.msExitFullscreen();
                } else if (doc.mozCancelFullScreen) {
                    doc.mozCancelFullScreen();
                } else if (doc.webkitExitFullscreen) {
                    doc.webkitExitFullscreen();
                }
            }
        }
    }

    private show() {
        this.src = this.images[this.index];
        this.description = this.descriptions[this.index];

        if (this.loadedList.indexOf(this.src) === -1) {
            this.showSpinner = true;
        }
    }
}
