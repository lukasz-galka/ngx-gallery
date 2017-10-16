import {} from 'jasmine';
import { Renderer, SimpleChange } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NgxGalleryPreviewComponent, NgxGalleryArrowsComponent, NgxGalleryHelperService } from "./";

describe('NgxGalleryArrowsComponent', () => {
    let fixture: ComponentFixture<NgxGalleryPreviewComponent>;
    let comp: NgxGalleryPreviewComponent;
    let el, prevArrow, nextArrow, image;

    beforeEach(() => {
        TestBed.configureTestingModule({
          declarations: [ NgxGalleryPreviewComponent, NgxGalleryArrowsComponent ],
          providers: [ NgxGalleryHelperService, Renderer ]
        })
        .overrideComponent(NgxGalleryPreviewComponent, {
            set: {
                styleUrls: [],
            }
        })

        fixture = TestBed.createComponent(NgxGalleryPreviewComponent);
        comp = fixture.componentInstance;
        comp.images = ['image-1.jpg', 'image-2.jpg', 'image-3.jpg'];
        comp.descriptions = ['1', '2', '3'];
        el = fixture.debugElement.nativeElement;
        image = el.querySelector('.ngx-gallery-preview-img');
    });

    it('should create component', () => {
        expect(fixture.componentInstance).toBeTruthy();
    });

    it('should show next image', () => {
        fixture.detectChanges();
        comp.open(0);
        comp.showNext();
        fixture.detectChanges();

        expect(image.getAttribute('src')).toEqual('image-2.jpg');
    });

    it('should not show next image if there is no more images', () => {
        fixture.detectChanges();
        comp.open(2);
        comp.showNext();
        fixture.detectChanges();

        expect(image.getAttribute('src')).toEqual('image-3.jpg');
    });

    it('should start from the beggining if there is no more images and infinity move is true', () => {
        fixture.detectChanges();
        comp.infinityMove = true;
        comp.open(2);
        comp.showNext();
        fixture.detectChanges();

        expect(image.getAttribute('src')).toEqual('image-1.jpg');
    });

    it('should show prev image', () => {
        fixture.detectChanges();
        comp.open(1);
        comp.showPrev();
        fixture.detectChanges();

        expect(image.getAttribute('src')).toEqual('image-1.jpg');
    });

    it('should not show prev image if there is no more images', () => {
        fixture.detectChanges();
        comp.open(0);
        comp.showPrev();
        fixture.detectChanges();

        expect(image.getAttribute('src')).toEqual('image-1.jpg');
    });

    it('should start from the end if there is no more images and infinity move is true', () => {
        fixture.detectChanges();
        comp.infinityMove = true;
        comp.open(0);
        comp.showPrev();
        fixture.detectChanges();

        expect(image.getAttribute('src')).toEqual('image-3.jpg');
    });

    it('should trigger event onOpen', (done) => {
        comp.onOpen.subscribe(() => {
            done()
        });

        fixture.detectChanges();
        comp.open(1);
    });

    it('should trigger event onClose', (done) => {
        comp.onClose.subscribe(() => {
            done()
        });

        fixture.detectChanges();
        comp.open(1);
        comp.close();
    });

    it('should prevent showing images if images arent defined', () => {
        comp.images = undefined;

        expect(comp.canShowNext()).toBeFalsy();
        expect(comp.canShowPrev()).toBeFalsy();
    });

    it('should show next image after autoPlayInterval', (done) => {
        comp.autoPlay = true;
        comp.autoPlayInterval = 100;
        comp.open(0);

        setTimeout(() => {
            fixture.detectChanges();
            expect(image.getAttribute('src')).toEqual('image-2.jpg');
            done();
        }, 150)
    });

    it('should stop auto play on moveenter if autoPlayPauseOnHover is true', (done) => {
        comp.autoPlay = true;
        comp.autoPlayInterval = 100;
        comp.autoPlayPauseOnHover = true;
        comp.open(0);

        image.dispatchEvent(new Event('mouseenter'));

        setTimeout(() => {
            fixture.detectChanges();
            expect(image.getAttribute('src')).toEqual('image-1.jpg');
            done();
        }, 150)
    });

    it('should start auto play on mouseleave if autoPlayPauseOnHover is true', (done) => {
        comp.autoPlay = true;
        comp.autoPlayInterval = 100;
        comp.autoPlayPauseOnHover = true;
        comp.open(0);

        image.dispatchEvent(new Event('mouseenter'));
        image.dispatchEvent(new Event('mouseleave'));

        setTimeout(() => {
            fixture.detectChanges();
            expect(image.getAttribute('src')).toEqual('image-2.jpg');
            done();
        }, 150)
    });

    // it('should close on escape', (done) => {
    //     comp.closeOnEsc = true;
    //     fixture.detectChanges();
    //     comp.open(1);

    //     comp.onClose.subscribe(() => {
    //         done()
    //     });

    //     let event = new KeyboardEvent('keydown', { key: "escape", detail: 27 });

    //     window.dispatchEvent(event);
    // });
})
