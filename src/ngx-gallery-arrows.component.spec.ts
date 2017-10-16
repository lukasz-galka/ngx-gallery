import {} from 'jasmine';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NgxGalleryArrowsComponent } from "./";

describe('NgxGalleryArrowsComponent', () => {
    let fixture: ComponentFixture<NgxGalleryArrowsComponent>;
    let comp: NgxGalleryArrowsComponent;
    let el;
    let prevArrow, nextArrow;

    beforeEach(() => {
        TestBed.configureTestingModule({
          declarations: [ NgxGalleryArrowsComponent ],
        })
        .overrideComponent(NgxGalleryArrowsComponent, {
            set: {
                styleUrls: [],
            }
        })

        fixture = TestBed.createComponent(NgxGalleryArrowsComponent);
        comp = fixture.componentInstance;
        fixture.detectChanges();
        el = fixture.debugElement.nativeElement;
        prevArrow = el.querySelector('.ngx-gallery-arrow-left .ngx-gallery-arrow');
        nextArrow = el.querySelector('.ngx-gallery-arrow-right .ngx-gallery-arrow')
    });

    it('should emit event onPrevClick after click on prev arrow', (done) => {
        comp.onPrevClick.subscribe(() => done());
        prevArrow.click();
    });

    it('should emit event onNextClick after click on next arrow', (done) => {
        comp.onNextClick.subscribe(() => done());
        nextArrow.click();
    });

    it('should disable prev arrow if prevDisabled is true', () => {
        comp.prevDisabled = true;
        fixture.detectChanges();
        expect(prevArrow.classList.contains('ngx-gallery-disabled')).toBeTruthy();
    });

    it('should disable next arrow if nextDisabled is true', () => {
        comp.nextDisabled = true;
        fixture.detectChanges();
        expect(nextArrow.classList.contains('ngx-gallery-disabled')).toBeTruthy();
    });

    it('should set custom class', () => {
        comp.arrowPrevIcon = 'my-prev-icon';
        comp.arrowNextIcon = 'my-next-icon';
        fixture.detectChanges();

        expect(prevArrow.getAttribute('class'))
            .toEqual('ngx-gallery-icon ngx-gallery-arrow my-prev-icon');
        expect(nextArrow.getAttribute('class'))
            .toEqual('ngx-gallery-icon ngx-gallery-arrow my-next-icon');
    });
})
