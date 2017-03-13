# NgxGallery
Angular2 gallery plugin

# Demo
[Link](http://fontawesome.io/)

# Prerequisites
[Font Awesome](http://fontawesome.io/)

# Installation
```npm install ngx-gallery --save```

# NgxGalleryOptions
- `width` | Type: `string` | Default value: `'500px'` - gallery width
- `height` | Type: `string` | Default value: `'400px'` - gallery height
- `breakpoint` | Type: `number` | Default value: `undefined` - responsive breakpoint
- `imagePercent` | Type: `number` | Default value: `70` - percentage height
- `imageArrows` | Type: `boolean` | Default value: `true` - enables or disables arrows
- `imageArrowsAutoHide` | Type: `boolean` | Default value: `false` - enables or disables arrows auto hide
- `thumbnailsColumns` | Type: `number` | Default value: `4` - columns count
- `thumbnailsPercent` | Type: `number` | Default value: `30` - percentage height
- `thumbnailsMargin` | Type: `number` | Default value: `10` - margin between thumbnails and image
- `thumbnailsArrows` | Type: `boolean` | Default value: `true` - enablse or disables arrows
- `thumbnailsArrowsAutoHide` | boolean: `string` | Default value: `false` - enables or disables arrows auto hide
- `thumbnailMargin` | Type: `number` | Default value: `10` - margin between images in thumbnails
- `preview` | Type: `boolean` | Default value: `true` - enables or disables preview

# NgxGalleryImage
- `small` | Type: `string` - used in thumbnails
- `medium` | Type: `string` - used in image
- `big` | Type: `string` - used in preview

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
import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';
...

@Component({
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {    
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];

    constructor() {        

        this.galleryOptions = [
            {
                width: '600px',
                height: '400px',
                thumbnailsColumns: 4
            },
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            {
                breakpoint: 400,
                preview: false
            }
        ];

        this.galleryImages = [
            {
                small: '/assets/1-small.jpg',
                medium: '/assets/1-medium.jpg',
                big: '/assets/1-big.jpg'
            },
            {
                small: '/assets/2-small.jpg',
                medium: '/assets/2-medium.jpg',
                big: '/assets/2-big.jpg'
            },
            {
                small: '/assets/3-small.jpg',
                medium: '/assets/3-medium.jpg',
                big: '/assets/3-big.jpg'
            }
        ];
    }
}

````

````html
// app.component.html
<ngx-gallery [options]="galleryOptions" [images]="galleryImages"></ngx-gallery>
````
