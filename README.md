**Off until 11.06.2018**



[![npm version](https://img.shields.io/npm/v/ngx-gallery.svg)](https://www.npmjs.com/package/ngx-gallery)
[![Downloads](https://img.shields.io/npm/dm/ngx-gallery.svg)](https://www.npmjs.com/package/ngx-gallery)
<!-- [![DevDependencies](https://david-dm.org/lukasz-galka/ngx-gallery/dev-status.svg)](https://david-dm.org/lukasz-galka/ngx-gallery?type=dev) -->
[![licence](https://img.shields.io/npm/l/ngx-gallery.svg)](https://www.npmjs.com/package/ngx-gallery)
[![Build Status](https://travis-ci.org/lukasz-galka/ngx-gallery.svg?branch=master)](https://travis-ci.org/lukasz-galka/ngx-gallery)
[![Coverage Status](https://coveralls.io/repos/github/lukasz-galka/ngx-gallery/badge.svg?branch=master)](https://coveralls.io/github/lukasz-galka/ngx-gallery?branch=master)

# NgxGallery
Angular image gallery plugin

# Demo
[Link](https://lukasz-galka.github.io/ngx-gallery-demo/)

# Playground
You can play with gallery using [Plunker](https://plnkr.co/edit/D1tdBCeFo6L9tMOCOb9p?p=preview) or [CodePen](https://codepen.io/lukasz-galka/project/editor/XGgxrL)

# Prerequisites
- [Font Awesome](http://fontawesome.io/) (required for icons)

```npm install font-awesome --save```

For angular-cli based projects insert styles into .angular-cli.json

````
"styles": [
    ...
    "../node_modules/font-awesome/css/font-awesome.css"
]
````

- [Hammerjs](http://hammerjs.github.io/) (required for swipe)

```npm install hammerjs --save```

````
import 'hammerjs';
````

# SystemJS

**If you are not using SystemJS you can skip this section.**
```
map: {
  'ngx-gallery': 'node_modules/ngx-gallery/bundles/ngx-gallery.umd.js',
}
```

# Angular Material

**If you are not using Angular Material you can skip this section.**

Angular Material is using `transform: translate3d(0,0,0);` in components styles. Unfortunately  `transform` changes positioning context and preview won't work properly. To avoid this situation you have to override material styles, for example:

````
@import "~@angular/material/prebuilt-themes/indigo-pink.css"; // your theme

.mat-sidenav-container, .mat-sidenav-content, .mat-tab-body-content {
    transform: none !important;
}
````

You can read more about this issue [here](https://github.com/angular/material2/issues/998)

# Installation
```npm install ngx-gallery --save```

# NgxGalleryOptions

- `width` | Type: `string` | Default value: `'500px'` - gallery width
- `height` | Type: `string` | Default value: `'400px'` - gallery height
- `breakpoint` | Type: `number` | Default value: `undefined` - responsive breakpoint, works like media query max-width
- `fullWidth` | Type: `boolean` | Default value: `false` - sets the same width as browser
- `layout` | Type: `string` | Default value: `NgxGalleryLayout.Bottom` - sets thumbnails position
- `startIndex` | Type: `number` | Default value: `0` - sets index of selected image on start
- `linkTarget` | Type: `string` | Default value: `_blank` - sets target attribute of link
- `lazyLoading` | Type: `boolean` | Default value: `true` - enables/disables lazy loading for images

- `image` | Type: `boolean` | Default value: `true` - enables or disables image
- `imageDescription` | Type: `boolean` | Default value: `true` - enables or disables description for images
- `imagePercent` | Type: `number` | Default value: `75` - percentage height
- `imageArrows` | Type: `boolean` | Default value: `true` - enables or disables arrows
- `imageArrowsAutoHide` | Type: `boolean` | Default value: `false` - enables or disables arrows auto hide
- `imageSwipe` | Type: `boolean` | Default value: `false` - enables or disables swipe
- `imageAnimation` | Type: `string` | Default value: `NgxGalleryAnimation.Fade` - animation type
- `imageSize` | Type: `string` | Default value: `NgxGalleryImageSize.Cover` - image size
- `imageAutoPlay` | Type: `boolean` | Default value `false` - enables or disables auto play
- `imageAutoPlayInterval` | Type: `number` | Default value: `2000` - interval for auto play (ms)
- `imageAutoPlayPauseOnHover` | Type: `boolean` | Default value: `false` - enables or disables pouse auto play on hover
- `imageInfinityMove` | Type: `boolean` | Default value: `false` - enables or disables infinity move by arrows
- `imageActions` | Type: `NgxGalleryAction[]` | Default value: `[]` - Array of custom actions
- `imageBullets` | Type: `boolean` | Default value: `false` - enables or disables navigation bullets

- `thumbnails` | Type: `boolean` | Default value: `true` - enables or disables thumbnails
- `thumbnailsColumns` | Type: `number` | Default value: `4` - columns count
- `thumbnailsRows` | Type: `number` | Default value: `1` - rows count
- `thumbnailsPercent` | Type: `number` | Default value: `25` - percentage height
- `thumbnailsMargin` | Type: `number` | Default value: `10` - margin between thumbnails and image
- `thumbnailsArrows` | Type: `boolean` | Default value: `true` - enables or disables arrows
- `thumbnailsArrowsAutoHide` | boolean: `string` | Default value: `false` - enables or disables arrows auto hide
- `thumbnailsSwipe` | Type: `boolean` | Default value: `false` - enables or disables swipe
- `thumbnailsMoveSize` | Type: `number` | Default value: `1` - number of items to move on arrow click
- `thumbnailsOrder` | Type: `number` | Default value: `NgxGalleryOrder.Column` - images order
- `thumbnailsRemainingCount` | Type: `boolean` | Default value: `false` - if true arrows are disabled and last item has label with remaining count
- `thumbnailsAsLinks` | Type: `boolean` | Default value: `false` - enables or disables links on thumbnails
- `thumbnailsAutoHide` | Type: `boolean` | Default value: `false` - hides thumbnails if there is only one image
- `thumbnailMargin` | Type: `number` | Default value: `10` - margin between images in thumbnails
- `thumbnailSize` | Type: `string` | Default value: `NgxGalleryImageSize.Cover` - thumbnail size
- `thumbnailActions` | Type: `NgxGalleryAction[]` | Default value: `[]` - Array of custom actions

- `preview` | Type: `boolean` | Default value: `true` - enables or disables preview
- `previewDescription` | Type: `boolean` | Default value: `true` - enables or disables description for images
- `previewArrows` | Type: `boolean` | Default value: `true` - enables or disables arrows
- `previewArrowsAutoHide` | boolean: `string` | Default value: `false` - enables or disables arrows auto hide
- `previewSwipe` | Type: `boolean` | Default value: `false` - enables or disables swipe
- `previewFullscreen` | Type: `boolean` | Default value: `false` - enables or disables fullscreen icon
- `previewForceFullscreen` | Type: `boolean` | Default value: `false` - enables or disables opening preview in fullscreen mode
- `previewCloseOnClick` | Type: `boolean` | Default value: `false` - enables or disables closing preview by click
- `previewCloseOnEsc` | Type: `boolean` | Default value: `false` - enables or disables closing preview by esc keyboard
- `previewKeyboardNavigation` | Type: `boolean` | Default value: `false` - enables or disables navigation by keyboard
- `previewAnimation` | Type: `boolean` | Default value: `true` - enables or disables image loading animation
- `previewAutoPlay` | Type: `boolean` | Default value `false` - enables or disables auto play
- `previewAutoPlayInterval` | Type: `number` | Default value: `2000` - interval for auto play (ms)
- `previewAutoPlayPauseOnHover` | Type: `boolean` | Default value: `false` - enables or disables pouse auto play on hover
- `previewInfinityMove` | Type: `boolean` | Default value: `false` - enables or disables infinity move by arrows
- `previewZoom` | Type: `boolean` | Default value: `false` - enables or disables zoom in and zoom out
- `previewZoomStep` | Type: `number` | Default value: `0.1` - step for zoom change
- `previewZoomMax` | Type: `number` | Default value: `2` - max value for zoom
- `previewZoomMin` | Type: `number` | Default value: `0.5` - min value for zoom
- `previewRotate` | Type: `boolean` | Default value: `false` - enables or disables rotate buttons
- `previewDownload` | Type: `boolean` | Default value: `false` - enables or disables downoad button
- `previewBullets` | Type: `boolean` | Default value: `false` - enables or disables navigation bullets

- `arrowPrevIcon` | Type: `string` | Default value: `'fa fa-arrow-circle-left'` - icon for prev arrow
- `arrowNextIcon` | Type: `string` | Default value: `'fa fa-arrow-circle-right'` - icon for next arrow
- `closeIcon` | Type: `string` | Default value: `'fa fa-times-circle'` - icon for close button
- `fullscreenIcon` | Type: `string` | Default value: `'fa fa-arrows-alt'` - icon for fullscreen button
- `spinnerIcon` | Type: `string` | Default value: `'fa fa-spinner fa-pulse fa-3x fa-fw'` - icon for spinner
- `zoomInIcon` | Type: `string` | Default value: `'fa fa-search-plus'` - icon for zoom in
- `zoomOutIcon` | Type: `string` | Default value: `'fa fa-search-minus'` - icon for zoom out
- `rotateLeftIcon` | Type: `string` | Default value: `'fa fa-undo'` - icon for rotate left
- `rotateRightIcon` | Type: `string` | Default value: `'fa fa-repeat'` - icon for rotate right
- `downloadIcon` | Type: `string` | Default value: `'fa fa-arrow-circle-down'` - icon for download
- `actions` | Type: `NgxGalleryAction[]` | Default value: `[]` - Array of new custom actions that will be added to the left of the current close/zoom/fullscreen icons

# NgxGalleryImage
- `small` | Type: `string | SafeResourceUrl` - url used in thumbnails
- `medium` | Type: `string | SafeResourceUrl` - url used in image
- `big` | Type: `string | SafeResourceUrl` - url used in preview
- `description` | Type: `string` - description used in preview
- `url` | Type: `string` - url used in link
- `label` | Type: `string` - label used for aria-label when thumbnail is a link

# NgxGalleryAnimation
- `Fade` (default)
- `Slide`
- `Rotate`
- `Zoom`

# NgxGalleryImageSize
- `Cover` (default)
- `Contain`

# NgxGalleryLayout
- `Top`
- `Bottom` (default)

# NgxGalleryOrder
- `Column` (default)
- `Row`
- `Page`

Examples for 

# NgxGalleryAction
- `icon` | Type: `string` - icon for custom action
- `disabled` | Type: `boolean` | Default value: `false` - if the icon should be disabled
- `titleText` | Type: `string` | Default value: `''` - text to set the title attribute to
- `onClick` | Type: `(event: Event, index: number) => void` - Output function to call when custom action icon is clicked

# Events
- `change` - triggered on image change
- `imagesReady` - triggered when images length > 0
- `previewOpen` - triggered on preview open
- `previewClose` - triggered on preview close
- `previewChange` - triggered on preview image change

# Methods
- `show(index: number): void` - shows image at index
- `showNext(): void` - shows next image
- `showPrev(): void` - shows prev image
- `canShowNext(): boolean` - returns true if there is next image
- `canShowPrev(): boolean` - returns true if there is prev image
- `openPreview(index: number): void` - opens preview at index
- `moveThumbnailsLeft(): void` - moves thumbnails to left
- `moveThumbnailsRight(): void` - moves thumbnails to right
- `canMoveThumbnailsLeft(): boolean` - returns true if you can move thumbnails to left
- `canMoveThumbnailsRight(): boolean` - returns true if you can move thumbnails to right

# Usage
````ts
// app.module.ts
import { NgxGalleryModule } from 'ngx-gallery';
...
@NgModule({
    imports: [
        ...
        NgxGalleryModule
        ...
    ],
    ...
})
export class AppModule { }
````

````ts
// app.component.ts
import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
...

@Component({
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];

    ngOnInit(): void {

        this.galleryOptions = [
            {
                width: '600px',
                height: '400px',
                thumbnailsColumns: 4,
                imageAnimation: NgxGalleryAnimation.Slide
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];

        this.galleryImages = [
            {
                small: 'assets/1-small.jpg',
                medium: 'assets/1-medium.jpg',
                big: 'assets/1-big.jpg'
            },
            {
                small: 'assets/2-small.jpg',
                medium: 'assets/2-medium.jpg',
                big: 'assets/2-big.jpg'
            },
            {
                small: 'assets/3-small.jpg',
                medium: 'assets/3-medium.jpg',
                big: 'assets/3-big.jpg'
            }
        ];
    }
}

````

````html
// app.component.html
<ngx-gallery [options]="galleryOptions" [images]="galleryImages"></ngx-gallery>
````

# Styling
- Active thumbnail
```
/deep/ .ngx-gallery-thumbnail.ngx-gallery-active {  
    /* your styles */
}
```

- Arrow
```
ngx-gallery /deep/ .ngx-gallery-arrow {
    /* your styles */
}
```

- Arrow in particular element
```
ngx-gallery /deep/ ngx-gallery-image .ngx-gallery-arrow {
    /* your styles */
}
ngx-gallery /deep/ ngx-gallery-thumbnails .ngx-gallery-arrow {
    /* your styles */
}
ngx-gallery /deep/ ngx-gallery-preview .ngx-gallery-arrow {
    /* your styles */
}
```

# Donate

If you like my work you can buy me a :beer: or :pizza: [![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/galer88)
