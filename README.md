[![npm version](https://img.shields.io/npm/v/ngx-gallery.svg)](https://www.npmjs.com/package/ngx-gallery)
[![Downloads](https://img.shields.io/npm/dm/ngx-gallery.svg)](https://www.npmjs.com/package/ngx-gallery)

# NgxGallery
Angular 2+ image gallery plugin

# Demo
[Link](https://lukasz-galka.github.io/ngx-gallery-demo/)

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

# Installation
```npm install ngx-gallery --save```

# NgxGalleryOptions

- `width` | Type: `string` | Default value: `'500px'` - gallery width
- `height` | Type: `string` | Default value: `'400px'` - gallery height
- `breakpoint` | Type: `number` | Default value: `undefined` - responsive breakpoint, works like media query max-width
- `fullWidth` | Type: `boolean` | Default value: `false` - sets the same width as browser

- `image` | Type: `boolean` | Default value: `true` - enables or disables image
- `imagePercent` | Type: `number` | Default value: `75` - percentage height
- `imageArrows` | Type: `boolean` | Default value: `true` - enables or disables arrows
- `imageArrowsAutoHide` | Type: `boolean` | Default value: `false` - enables or disables arrows auto hide
- `imageSwipe` | Type: `boolean` | Default value: `false` - enables or disables swipe
- `imageAnimation` | Type: `string` | Default value: `NgxGalleryAnimation.Fade` - animation type
- `imageSize` | Type: `string` | Default value: `NgxGalleryImageSize.Cover` - image size

- `thumbnails` | Type: `boolean` | Default value: `true` - enables or disables thumbnails
- `thumbnailsColumns` | Type: `number` | Default value: `4` - columns count
- `thumbnailsRows` | Type: `number` | Default value: `1` - rows count
- `thumbnailsPercent` | Type: `number` | Default value: `25` - percentage height
- `thumbnailsMargin` | Type: `number` | Default value: `10` - margin between thumbnails and image
- `thumbnailsArrows` | Type: `boolean` | Default value: `true` - enables or disables arrows
- `thumbnailsArrowsAutoHide` | boolean: `string` | Default value: `false` - enables or disables arrows auto hide
- `thumbnailsSwipe` | Type: `boolean` | Default value: `false` - enables or disables swipe
- `thumbnailMargin` | Type: `number` | Default value: `10` - margin between images in thumbnails

- `preview` | Type: `boolean` | Default value: `true` - enables or disables preview
- `previewDescription` | Type: `boolean` | Default value: `true` - enables or disables description for images
- `previewSwipe` | Type: `boolean` | Default value: `false` - enables or disables swipe
- `previewCloseOnClick` | Type: `boolean` | Default value: `false` - enables or disables closing preview by click
- `previewKeyboardNavigation` | Type: `boolean` | Default value: `false` - enables or disables navigation by keyboard

# NgxGalleryImage
- `small` | Type: `string` - url used in thumbnails
- `medium` | Type: `string` - url used in image
- `big` | Type: `string` - url used in preview
- `description` | Type: `string` - description used in preview

# NgxGalleryAnimation
- `Fade` (default)
- `Slide`
- `Rotate`
- `Zoom`

# NgxGalleryImageSize
- `Cover` (default)
- `Contain`

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

# SystemJS
````ts
'ngx-gallery': 'node_modules/ngx-gallery/bundles/ngx-gallery.umd.js',
````

# Troubleshooting
- Preview doesn't have full size [10](https://github.com/lukasz-galka/ngx-gallery/issues/10), [13](https://github.com/lukasz-galka/ngx-gallery/issues/13)
