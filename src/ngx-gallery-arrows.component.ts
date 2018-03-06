import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ngx-gallery-arrows',
    template: `
        <div class="ngx-gallery-arrow-wrapper ngx-gallery-arrow-left">
            <i class="ngx-gallery-icon ngx-gallery-arrow {{arrowPrevIcon}}" aria-hidden="true" (click)="handlePrevClick($event)" [class.ngx-gallery-disabled]="prevDisabled"></i>
        </div>
        <div class="ngx-gallery-arrow-wrapper ngx-gallery-arrow-right">
            <i class="ngx-gallery-icon ngx-gallery-arrow {{arrowNextIcon}}" aria-hidden="true" (click)="handleNextClick($event)" [class.ngx-gallery-disabled]="nextDisabled"></i>
        </div>
    `,
    styleUrls: ['./ngx-gallery-arrows.component.scss']
})
export class NgxGalleryArrowsComponent {
    @Input() preventDefault: boolean;
    @Input() prevDisabled: boolean;
    @Input() nextDisabled: boolean;
    @Input() arrowPrevIcon: string;
    @Input() arrowNextIcon: string;

    @Output() onPrevClick = new EventEmitter();
    @Output() onNextClick = new EventEmitter();

    handlePrevClick(event): void {
        if (this.preventDefault) {
            event.preventDefault();
        }
        this.onPrevClick.emit();
    }

    handleNextClick(event): void {
        if (this.preventDefault) {
            event.preventDefault();
        }
        this.onNextClick.emit();
    }
}
