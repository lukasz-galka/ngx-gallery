import { Component, Input, Output, EventEmitter, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'ngx-gallery-image',
    templateUrl: './ngx-gallery-image.component.html',
    styleUrls: ['./ngx-gallery-image.component.scss']
})
export class NgxGalleryImageComponent implements OnInit {
    @Input() images: string[];
    @Input() clickable: boolean;
    @Input() selectedIndex: number;
    @Input() arrows: boolean;
    @Input() arrowsAutoHide: boolean;

    @Output() onClick = new EventEmitter();
    @Output() onActiveChange = new EventEmitter();

    ngOnInit(): void {
        if(this.arrows && this.arrowsAutoHide) {
            this.arrows = false;
        }
    }

    @HostListener('mouseenter') onMouseEnter() {
        if(this.arrowsAutoHide && !this.arrows) {
            this.arrows = true;
        }
    }

    @HostListener('mouseleave') onMouseLeave() {
        if(this.arrowsAutoHide && this.arrows) {
            this.arrows = false;
        }
    }

    handleClick(event: Event, index: number): void {
        if (this.clickable) {
            this.onClick.emit(index);

            event.stopPropagation();
            event.preventDefault();
        }
    }

    showNext(): void {
        if (this.canShowNext()) {
            this.selectedIndex++;
            this.onActiveChange.emit(this.selectedIndex);
        }
    }

    showPrev(): void {
        if (this.canShowPrev()) {
            this.selectedIndex--;
            this.onActiveChange.emit(this.selectedIndex);
        }
    }

    canShowNext(): boolean {
        return this.selectedIndex < this.images.length - 1 ? true : false;
    }

    canShowPrev(): boolean {
        return this.selectedIndex > 0 ? true : false;
    }
}
