import { } from 'jasmine';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NgxGalleryActionComponent } from './';

describe('NgxGalleryActionComponent', () => {
    let fixture: ComponentFixture<NgxGalleryActionComponent>;
    let comp: NgxGalleryActionComponent;
    let el, icon, iconContent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ NgxGalleryActionComponent ],
        })

        fixture = TestBed.createComponent(NgxGalleryActionComponent);
        comp = fixture.componentInstance;
        comp.icon = 'test';

        fixture.detectChanges();

        el = fixture.debugElement.nativeElement;
        icon = el.querySelector('.ngx-gallery-icon');
        iconContent = el.querySelector('.ngx-gallery-icon-content');
    });

    it('should emit event onClick after click', () => {
        spyOn(comp.onClick, 'emit');
        icon.click();
        expect(comp.onClick.emit).toHaveBeenCalled();
    });

    it('should not emit event onClick after click if action is disabled', () => {
        comp.disabled = true;
        spyOn(comp.onClick, 'emit');
        icon.click();
        expect(comp.onClick.emit).not.toHaveBeenCalled();
    });

    it('should set icon class', () => {
        comp.disabled = true;
        fixture.detectChanges();

        expect(iconContent.classList.contains('test')).toBeTruthy();
    });
});
