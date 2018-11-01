import { NgxGalleryImage } from './ngx-gallery-image.model';
import { } from 'jasmine';
import { Renderer, SimpleChange } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import {
    NgxGalleryComponent, NgxGalleryActionComponent, NgxGalleryImageComponent, NgxGalleryThumbnailsComponent,
    NgxGalleryPreviewComponent, NgxGalleryArrowsComponent, NgxGalleryBulletsComponent, NgxGalleryHelperService,
    NgxGalleryOptions
} from './';

describe('NgxGalleryComponent', () => {
    let fixture: ComponentFixture<NgxGalleryComponent>;
    let comp: NgxGalleryComponent;
    let el, prevArrow, nextArrow, image;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ NgxGalleryComponent, NgxGalleryActionComponent, NgxGalleryThumbnailsComponent,
                NgxGalleryImageComponent, NgxGalleryPreviewComponent, NgxGalleryArrowsComponent, NgxGalleryBulletsComponent ],
            providers: [ NgxGalleryHelperService, Renderer ]
        })
            .overrideComponent(NgxGalleryComponent, {
                set: {
                    styleUrls: [],
                }
            })

        fixture = TestBed.createComponent(NgxGalleryComponent);
        comp = fixture.componentInstance;

        comp.images = [
            new NgxGalleryImage({
                small: 'assets/1-small.jpg',
                medium: 'assets/1-medium.jpg',
                big: 'assets/1-big.jpg'
            }),
            new NgxGalleryImage({
                small: 'assets/2-small.jpg',
                medium: 'assets/2-medium.jpg',
                big: 'assets/2-big.jpg'
            }),
            new NgxGalleryImage({
                small: 'assets/3-small.jpg',
                medium: 'assets/3-medium.jpg',
                big: 'assets/3-big.jpg'
            })
        ];
        comp.options = [ new NgxGalleryOptions({}) ];
        fixture.detectChanges();

        el = fixture.debugElement.nativeElement;
    });

    it('should create component', () => {
        expect(fixture.componentInstance).toBeTruthy();
    });

    it('should return true from canShowNext if there are more images', () => {
        comp.selectedIndex = 0;
        expect(comp.canShowNext()).toBeTruthy();
    });

    it('should return false from canShowNext if there are no images', () => {
        comp.images = undefined;
        expect(comp.canShowNext()).toBeFalsy();
    });

    it('should return true from canShowPrev if there are more images', () => {
        comp.selectedIndex = 1;
        expect(comp.canShowPrev()).toBeTruthy();
    });

    it('should return false from canShowPrev if there are no images', () => {
        comp.images = undefined;
        expect(comp.canShowPrev()).toBeFalsy();
    });
})
