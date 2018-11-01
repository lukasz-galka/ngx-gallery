import { Component, Input, Output, EventEmitter, } from '@angular/core';

@Component({
    selector: 'ngx-gallery-bullets',
    template: `
        <div class="ngx-gallery-bullet" *ngFor="let bullet of getBullets(); let i = index;" (click)="handleChange($event, i)" [ngClass]="{ 'ngx-gallery-active': i == active }"></div>
    `,
    styleUrls: ['./ngx-gallery-bullets.component.scss']
})
export class NgxGalleryBulletsComponent {
    @Input() count: number;
    @Input() active: number = 0;

    @Output() onChange = new EventEmitter();

    getBullets(): number[] {
        return Array(this.count);
    }

    handleChange(event: Event, index: number): void {
        this.onChange.emit(index);
    }
}
