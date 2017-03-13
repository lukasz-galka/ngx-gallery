import { Component, Input, Output, EventEmitter, } from '@angular/core';

@Component({
    selector: 'ngx-gallery-arrows',
    templateUrl: './ngx-gallery-arrows.component.html',
    styleUrls: ['./ngx-gallery-arrows.component.scss']
})
export class NgxGalleryArrowsComponent {
    @Input() prevDisabled: boolean;
    @Input() nextDisabled: boolean;

    @Output() onPrevClick = new EventEmitter();
    @Output() onNextClick = new EventEmitter();

    handlePrevClick(): void {
        this.onPrevClick.emit();
    }

    handleNextClick(): void {
        this.onNextClick.emit();
    }
}
