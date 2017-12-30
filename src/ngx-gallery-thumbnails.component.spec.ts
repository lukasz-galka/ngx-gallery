import {} from 'jasmine';
import { Renderer, SimpleChange } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NgxGalleryThumbnailsComponent, NgxGalleryArrowsComponent, NgxGalleryHelperService } from "./";

describe('NgxGalleryThumbnailsComponent', () => {
    let fixture: ComponentFixture<NgxGalleryThumbnailsComponent>;
    let comp: NgxGalleryThumbnailsComponent;
    let el, thumbnails;

    beforeEach(() => {
        TestBed.configureTestingModule({
          declarations: [ NgxGalleryThumbnailsComponent, NgxGalleryArrowsComponent ],
          providers: [ NgxGalleryHelperService, Renderer ]
        })
        .overrideComponent(NgxGalleryThumbnailsComponent, {
            set: {
                styleUrls: [],
            }
        })

        fixture = TestBed.createComponent(NgxGalleryThumbnailsComponent);
        comp = fixture.componentInstance;
        comp.images = ['image-1.jpg', 'image-2.jpg', 'image-3.jpg'];
        comp.columns = 2;
        comp.rows = 1;
        comp.margin = 10;
        comp.moveSize = 1;
        el = fixture.debugElement.nativeElement;
        thumbnails = el.querySelector('.ngx-gallery-thumbnails');
    });

    it('should create component', () => {
        expect(fixture.componentInstance).toBeTruthy();
    });

    it('should show next images', () => {
        comp.selectedIndex = 0;
        comp.moveRight();
        fixture.detectChanges();

        expect(thumbnails.getAttribute('style')).toEqual('left: calc(-50% - 5px);');
    });

    it('should show prev images', () => {
        comp.selectedIndex = 0;
        comp.moveRight();
        comp.moveLeft();
        fixture.detectChanges();

        expect(thumbnails.getAttribute('style')).toEqual('left: calc(0% - 0px);');
    });

    it('should validate selected index after selected index change', () => {
        fixture.detectChanges();
        comp.selectedIndex = 5;

        comp.ngOnChanges({
            selectedIndex: new SimpleChange(null, comp.selectedIndex, true)
        });

        fixture.detectChanges();

        expect(thumbnails.getAttribute('style')).toEqual('left: calc(-50% - 5px);');
    });

    it('should emit event onActiveChange after click on image', (done) => {
        comp.onActiveChange.subscribe((index) => {
            expect(index).toEqual(1);
            done()
        });

        fixture.detectChanges();
        el.querySelectorAll('.ngx-gallery-thumbnail')[1].click();
    });

    it('should show arrows if are enabled', () => {
        comp.arrows = true;
        fixture.detectChanges();

        expect(comp.canShowArrows()).toBeTruthy();
    });
})
