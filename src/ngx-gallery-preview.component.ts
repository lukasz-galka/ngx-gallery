import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, ElementRef, HostListener } from '@angular/core';
import { SafeResourceUrl, DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { NgxGalleryHelperService } from './ngx-gallery-helper.service';

@Component({
    selector: 'ngx-gallery-preview',
    templateUrl: './ngx-gallery-preview.component.html',
    styleUrls: ['./ngx-gallery-preview.component.scss']
})
export class NgxGalleryPreviewComponent implements OnChanges {

    src: string;
    srcIndex: number;
    description: string;
    showSpinner = false;

    @Input() images: string[] | SafeResourceUrl[];
    @Input() descriptions: string[];
    @Input() showDescription: boolean;
    @Input() swipe: boolean;
    @Input() fullscreen: boolean;
    @Input() forceFullscreen: boolean;
    @Input() closeOnClick: boolean;
    @Input() closeOnEsc: boolean;
    @Input() keyboardNavigation: boolean;
    @Input() arrowPrevIcon: string;
    @Input() arrowNextIcon: string;
    @Input() closeIcon: string;
    @Input() fullscreenIcon: string;
    @Input() spinnerIcon: string;
    @Input() autoPlay: boolean;
    @Input() autoPlayInterval: number;
    @Input() autoPlayPauseOnHover: boolean;
    @Input() infinityMove: boolean;

    @Output() onOpen = new EventEmitter();
    @Output() onClose = new EventEmitter();

    private index = 0;
    private loadedList: string[] = [];
    private isOpen = false;
    private timer;

    constructor(private sanitization: DomSanitizer,
        private elementRef: ElementRef, private helperService: NgxGalleryHelperService) {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['swipe']) {
            this.helperService.manageSwipe(this.swipe, this.elementRef,
            'preview', () => this.showNext(), () => this.showPrev());
        }
    }

    @HostListener('window:keydown', ['$event']) onKeyDown(e) {
        if (this.isOpen) {
            if (this.keyboardNavigation) {
                if (this.isKeyboardPrev(e)) {
                    this.showPrev();
                } else if (this.isKeyboardNext(e)) {
                    this.showNext();
                }
            }
            if (this.closeOnEsc && this.isKeyboardEsc(e)) {
                this.close();
            }
        }
    }

    open(index: number): void {

        this.onOpen.emit();

        this.index = index;
        this.isOpen = true;
        this.show();

        if (this.forceFullscreen) {
            this.manageFullscreen();
        }

        if (this.autoPlay) {
            this.startAutoPlay();
        }
    }

    close(): void {
        this.isOpen = false;
        this.closeFullscreen();
        this.onClose.emit();

        this.stopAutoPlay();
    }

    loaded(): void {
        this.showSpinner = false;
        this.loadedList.push(this.src);
    }

    imageMouseEnter(): void {
        if (this.autoPlay && this.autoPlayPauseOnHover) {
            this.stopAutoPlay();
        }
    }

    imageMouseLeave(): void {
        if (this.autoPlay && this.autoPlayPauseOnHover) {
            this.startAutoPlay();
        }
    }

    startAutoPlay(): void {
        this.stopAutoPlay();

        this.timer = setInterval(() => {
            if (!this.showNext()) {
                this.index = -1;
                this.showNext();
            }
        }, this.autoPlayInterval);
    }

    stopAutoPlay(): void {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    showNext(): boolean {
        if (this.canShowNext()) {
            this.index++;

            if (this.index === this.images.length) {
                this.index = 0;
            }

            this.show();
            return true;
        } else {
            return false;
        }
    }

    showPrev(): void {
        if (this.canShowPrev()) {
            this.index--;

            if (this.index < 0) {
                this.index = this.images.length - 1;
            }

            this.show();
        }
    }

    canShowNext(): boolean {
        if (this.images) {
            return this.infinityMove || this.index < this.images.length - 1 ? true : false;
        } else {
            return false;
        }
    }

    canShowPrev(): boolean {
        if (this.images) {
            return this.infinityMove || this.index > 0 ? true : false;
        } else {
            return false;
        }
    }

    manageFullscreen(): void {
        if (this.fullscreen || this.forceFullscreen) {
            const doc = <any>document;

            if (!doc.fullscreenElement && !doc.mozFullScreenElement
                && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
                this.openFullscreen();
            } else {
                this.closeFullscreen();
            }
        }
    }

    getSafeUrl(image: string): SafeUrl {
        return image.substr(0, 10) === 'data:image' ?
            image : this.sanitization.bypassSecurityTrustUrl(image);
    }

    private isKeyboardNext(e): boolean {
        return e.keyCode === 39 ? true : false;
    }

    private isKeyboardPrev(e): boolean {
        return e.keyCode === 37 ? true : false;
    }

    private isKeyboardEsc(e): boolean {
        return e.keyCode === 27 ? true : false;
    }

    private openFullscreen(): void {
        const element = <any>document.documentElement;

        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        }
    }

    private closeFullscreen(): void {

        const doc = <any>document;

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

    private show() {
        this.src = <string>this.images[this.index];
        this.srcIndex = this.index;
        this.description = this.descriptions[this.index];

        if (this.loadedList.indexOf(this.src) === -1) {
            this.showSpinner = true;
        }
    }
}
