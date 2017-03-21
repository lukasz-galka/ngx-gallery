import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ngx-gallery-preview',
    templateUrl: './ngx-gallery-preview.component.html',
    styleUrls: ['./ngx-gallery-preview.component.scss']
})
export class NgxGalleryPreviewComponent {

    src: string;
    description: string;

    showSpinner: boolean = false;

    @Input() images: string[];
    @Input() descriptions: string[];
    @Input() showDescription: boolean;

    @Output() onClose = new EventEmitter();

    private index: number = 0;
    private loadedList: string[] = [];

    open(index: number): void {
        this.index = index;
        this.show();
    }

    close(): void {
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

    private show() {
        this.src = this.images[this.index];
        this.description = this.descriptions[this.index];

        if (this.loadedList.indexOf(this.src) === -1) {
            this.showSpinner = true;
        }
    }
}
