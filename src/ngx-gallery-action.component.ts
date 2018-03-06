import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ngx-gallery-action',
    template: `
        <i class="ngx-gallery-icon {{ icon }}" [class.ngx-gallery-icon-disabled]="disabled"
            aria-hidden="true"
            title="{{ titleText }}"
            (click)="handleClick($event)">
        </i>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxGalleryActionComponent {
    @Input() icon: string;
    @Input() disabled = false;
    @Input() titleText = '';

    @Output() onClick: EventEmitter<Event> = new EventEmitter();

    handleClick(event: Event) {
        if (!this.disabled) {
            this.onClick.emit(event);
        }

        event.stopPropagation();
        event.preventDefault();
    }
}
