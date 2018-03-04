<a name="5.1.0"></a>
# 5.1.0 (2017-03-04)

* Add option `previewAnimation` ([f7ec362](https://github.com/lukasz-galka/ngx-gallery/commit/f7ec362))

<a name="5.0.0"></a>
# 5.0.0 (2017-02-27)

* Add support for fontawesome 5 and svg icons ([de0116b](https://github.com/lukasz-galka/ngx-gallery/commit/de0116b))

### BREAKING CHANGES

* New icons structure because of fontawesome 5 [#132](https://github.com/lukasz-galka/ngx-gallery/issues/132)

BEFORE: 

```
<i class="ngx-gallery-icon fa fa-arrow-circle-right"></i>
```

AFTER:
```
<div class="ngx-gallery-icon">
    <i class="fa fa-arrow-circle-right"></i>
</div>
```

<a name="4.3.0"></a>
# 4.3.0 (2017-01-24)

* Add custom action for image and thumbnail ([8e9fa7e](https://github.com/lukasz-galka/ngx-gallery/commit/8e9fa7e))

<a name="4.2.5"></a>
# 4.2.5 (2017-01-23)

* Export action model ([52edf54](https://github.com/lukasz-galka/ngx-gallery/commit/52edf54))

<a name="4.2.4"></a>
# 4.2.4 (2017-01-23)

* Check replace method before url validation ([cb32a21](https://github.com/lukasz-galka/ngx-gallery/commit/cb32a21))

<a name="4.2.3"></a>
# 4.2.3 (2017-01-23)

* Fix thubnails animation on iphone ([72e6cdf](https://github.com/lukasz-galka/ngx-gallery/commit/72e6cdf))

<a name="4.2.2"></a>
# 4.2.2 (2017-01-22)

* Fix private handler previewSelect ([a7686a5](https://github.com/lukasz-galka/ngx-gallery/commit/a7686a5))

<a name="4.2.1"></a>
# 4.2.1 (2017-01-21)

* Fix styles path for arrow in preview ([f49df04](https://github.com/lukasz-galka/ngx-gallery/commit/f49df04))

<a name="4.2.0"></a>
# 4.2.0 (2017-01-21)

* Add event previewChange and custom action on preview ([6a38465](https://github.com/lukasz-galka/ngx-gallery/commit/6a38465))

<a name="4.1.2"></a>
# 4.1.2 (2017-12-30)

* Reset position after images change ([767dd4d](https://github.com/lukasz-galka/ngx-gallery/commit/767dd4d))

<a name="4.1.1"></a>
# 4.1.1 (2017-12-10)

* Stop image auto play when preview is open ([c1216ce](https://github.com/lukasz-galka/ngx-gallery/commit/c1216ce))

<a name="4.1.0"></a>
# 4.1.0 (2017-12-10)

* Allow html in image description ([36ea9c9](https://github.com/lukasz-galka/ngx-gallery/commit/36ea9c9))

<a name="4.0.0"></a>
# 4.0.0 (2017-12-05)

* Add lazy loading ([ce900c9](https://github.com/lukasz-galka/ngx-gallery/commit/ce900c9))

### BREAKING CHANGES
* lazy loading is enabled by default 

<a name="3.3.0"></a>
# 3.3.0 (2017-11-26)

* Add option thumbnailsAsLinks and linkTarget ([3fe30e0](https://github.com/lukasz-galka/ngx-gallery/commit/3fe30e0))

<a name="3.2.0"></a>
# 3.2.0 (2017-11-26)

* Add event imagesReady ([c20e354](https://github.com/lukasz-galka/ngx-gallery/commit/c20e354))
* Add method show ([e24f837](https://github.com/lukasz-galka/ngx-gallery/commit/e24f837))

<a name="3.1.4"></a>
# 3.1.4 (2017-11-22)

* Fix replacing % in url ([e8cc079](https://github.com/lukasz-galka/ngx-gallery/commit/e8cc079))

<a name="3.1.3"></a>
# 3.1.3 (2017-11-21)

* Fix parenthesis and spaces in url ([094661d](https://github.com/lukasz-galka/ngx-gallery/commit/094661d))

<a name="3.1.2"></a>
# 3.1.2 (2017-11-21)

* Fix images reload on preview ([403a619](https://github.com/lukasz-galka/ngx-gallery/commit/403a619))

<a name="3.1.1"></a>
# 3.1.1 (2017-11-07)

* Fix loading of preview images ([9755810](https://github.com/lukasz-galka/ngx-gallery/commit/9755810))

<a name="3.1.0"></a>
# 3.1.0 (2017-11-04)

* Add options previewZoomStep, previewZoomMax and previewZoomMin ([f2fc2d4](https://github.com/lukasz-galka/ngx-gallery/commit/f2fc2d4))

<a name="3.0.1"></a>
# 3.0.1 (2017-11-01)

* Fix zoomValue accessibility ([b16614d](https://github.com/lukasz-galka/ngx-gallery/commit/b16614d))

<a name="3.0.0"></a>
# 3.0.0 (2017-10-31)

* Add option previewZoom ([c13a4ee](https://github.com/lukasz-galka/ngx-gallery/commit/c13a4ee))

### BREAKING CHANGES

* Preview icons html and css 

<a name="2.4.1"></a>
# 2.4.1 (2017-10-26)

* Remove usage of PLATFORM_ID for Angular 2 apps ([24168e4](https://github.com/lukasz-galka/ngx-gallery/commit/24168e4))

<a name="2.4.0"></a>
# 2.4.0 (2017-10-19)

* Add option thumbnailsRemainingCount ([1c23bc3](https://github.com/lukasz-galka/ngx-gallery/commit/1c23bc3))

<a name="2.3.1"></a>
# 2.3.1 (2017-10-18)

* Fix thumbnails position after image change ([48ea609](https://github.com/lukasz-galka/ngx-gallery/commit/48ea609))
* Fix errors when images array is undefined ([e61851e](https://github.com/lukasz-galka/ngx-gallery/commit/e61851e))

<a name="2.3.0"></a>
# 2.3.0 (2017-10-17)

* Add option thumbnailsOrder ([ab1bfb2](https://github.com/lukasz-galka/ngx-gallery/commit/ab1bfb2))

<a name="2.2.0"></a>
# 2.2.0 (2017-10-11)

* Add navigation methods ([c897081](https://github.com/lukasz-galka/ngx-gallery/commit/c897081))

<a name="2.1.0"></a>
# 2.1.0 (2017-10-09)

* Add option thumbnailsMoveSize ([ec913b9](https://github.com/lukasz-galka/ngx-gallery/commit/ec913b9))

<a name="2.0.1"></a>
# 2.0.1 (2017-10-08)

* Fix browser crash for base64 images ([2b4bd4b](https://github.com/lukasz-galka/ngx-gallery/commit/2b4bd4b))

<a name="2.0.0"></a>
# 2.0.0 (2017-10-05)

* New build system ([3b5ad42](https://github.com/lukasz-galka/ngx-gallery/commit/3b5ad42))

<a name="1.7.0"></a>
# 1.7.0 (2017-10-01)

* Add possibility to stop autoplay on hover ([75d803c](https://github.com/lukasz-galka/ngx-gallery/commit/75d803c))

<a name="1.6.1"></a>
# 1.6.1 (2017-09-27)

* Remove KeyboardEvent for universal ([d7eafb1](https://github.com/lukasz-galka/ngx-gallery/commit/d7eafb1))

<a name="1.6.0"></a>
# 1.6.0 (2017-09-26)

* Add infinity scroll for image and preview ([1a78631](https://github.com/lukasz-galka/ngx-gallery/commit/1a78631))

<a name="1.5.0"></a>
# 1.5.0 (2017-09-26)

* Add support for compilation with strictNullChecks ([6700950](https://github.com/lukasz-galka/ngx-gallery/commit/6700950))

<a name="1.4.0"></a>
# 1.4.0 (2017-09-20)

* Add auto play ([c2b0345](https://github.com/lukasz-galka/ngx-gallery/commit/c2b0345))

<a name="1.3.0"></a>
# 1.3.0 (2017-09-13)

* Remove lint warnings ([605ce55](https://github.com/lukasz-galka/ngx-gallery/commit/605ce55))

<a name="1.2.0"></a>
# 1.2.0 (2017-09-12)

* Add option startIndex ([a106f6c](https://github.com/lukasz-galka/ngx-gallery/commit/a106f6c))

<a name="1.1.7"></a>
# 1.1.7 (2017-08-31)

* Use safe url/style ([6aaa4ed](https://github.com/lukasz-galka/ngx-gallery/commit/6aaa4ed))

<a name="1.1.6"></a>
# 1.1.6 (2017-08-29)

* Add previewOpen and previewClose events ([3422ab0](https://github.com/lukasz-galka/ngx-gallery/commit/3422ab0))

<a name="1.1.5"></a>
# 1.1.5 (2017-08-24)

* Better validation for loaded images ([5069b81](https://github.com/lukasz-galka/ngx-gallery/commit/5069b81))

<a name="1.1.4"></a>
# 1.1.4 (2017-08-15)

* Add option layout ([06d0eec](https://github.com/lukasz-galka/ngx-gallery/commit/06d0eec))

<a name="1.1.3"></a>
# 1.1.3 (2017-08-15)

* Enable vertical scroll for gallery with swipe ([ccf5581](https://github.com/lukasz-galka/ngx-gallery/commit/ccf5581))

<a name="1.1.2"></a>
# 1.1.2 (2017-08-15)

* Add option previewForceFullscreen ([fcf7fb5](https://github.com/lukasz-galka/ngx-gallery/commit/fcf7fb5))

<a name="1.1.1"></a>
# 1.1.1 (2017-08-3)

* Add support for SafeResourceUrl ([6a80b4b](https://github.com/lukasz-galka/ngx-gallery/commit/6a80b4b))

<a name="1.1.0"></a>
# 1.1.0 (2017-08-2)

* Add optios to change icons ([80a5c35](https://github.com/lukasz-galka/ngx-gallery/commit/80a5c35))

<a name="1.0.5"></a>
# 1.0.5 (2017-07-29)

* Add option previewCloseOnEsc ([1f0514f](https://github.com/lukasz-galka/ngx-gallery/commit/1f0514f))

<a name="1.0.4"></a>
# 1.0.4 (2017-07-19)

* Fix TS types ([ca2a7d8](https://github.com/lukasz-galka/ngx-gallery/commit/ca2a7d8))

<a name="1.0.3"></a>
# 1.0.3 (2017-07-18)

* Add change event ([f12ed44](https://github.com/lukasz-galka/ngx-gallery/commit/f12ed44))

<a name="1.0.2"></a>
# 1.0.2 (2017-07-18)

* Add thumbnailSize option ([1fa1505](https://github.com/lukasz-galka/ngx-gallery/commit/1fa1505))

<a name="1.0.1"></a>
# 1.0.1 (2017-07-18)

* Set old build ([2a03acc](https://github.com/lukasz-galka/ngx-gallery/commit/2a03acc))

<a name="1.0.0"></a>
# 1.0.0 (2017-07-11)

* Update build ([fe080a3](https://github.com/lukasz-galka/ngx-gallery/commit/fe080a3))

<a name="0.8.5"></a>
# 0.8.5 (2017-06-05)

* Add previewKeyboardNavigation option ([672e5c1](https://github.com/lukasz-galka/ngx-gallery/commit/672e5c1))

<a name="0.8.4"></a>
# 0.8.4 (2017-05-15)

* Add fullWidth option ([b5dd459](https://github.com/lukasz-galka/ngx-gallery/commit/b5dd459))

<a name="0.8.3"></a>
# 0.8.3 (2017-05-7)

* Fix preview with fullscreen ([ee33a71](https://github.com/lukasz-galka/ngx-gallery/commit/ee33a71))

<a name="0.8.2"></a>
# 0.8.2 (2017-05-6)

* Implement custom change detection for images ([e996e86](https://github.com/lukasz-galka/ngx-gallery/commit/e996e86)), closes [#4](https://github.com/lukasz-galka/ngx-gallery/issues/4) [#6](https://github.com/lukasz-galka/ngx-gallery/issues/6) 

<a name="0.8.1"></a>
# 0.8.1 (2017-05-3)

* Detect images change ([44092b8](https://github.com/lukasz-galka/ngx-gallery/commit/44092b8))

<a name="0.8.0"></a>
# 0.8.0 (2017-04-19)

* Add possibility to manage image size (cover or contain) ([3f1b581](https://github.com/lukasz-galka/ngx-gallery/commit/3f1b581)), closes [#1](https://github.com/lukasz-galka/ngx-gallery/issues/1) 

<a name="0.7.2"></a>
# 0.7.2 (2017-04-18)

* Add previewCloseOnClick option ([8e87683](https://github.com/lukasz-galka/ngx-gallery/commit/8e87683)), closes [#2](https://github.com/lukasz-galka/ngx-gallery/issues/2) 

<a name="0.7.1"></a>
# 0.7.1 (2017-03-29)

* Remove global styles ([e900b0d](https://github.com/lukasz-galka/ngx-gallery/commit/e900b0d))

<a name="0.7.0"></a>
# 0.7.0 (2017-03-27)

* Add fullscreen option for preview ([2775459](https://github.com/lukasz-galka/ngx-gallery/commit/2775459))

<a name="0.6.1"></a>
# 0.6.1 (2017-03-27)

* Fix jumping arrow on fade animation ([4a8a3f2](https://github.com/lukasz-galka/ngx-gallery/commit/4a8a3f2))

<a name="0.6.0"></a>
# 0.6.0 (2017-03-24)

* Add more animations for image ([9a027c7](https://github.com/lukasz-galka/ngx-gallery/commit/9a027c7))

<a name="0.5.0"></a>
# 0.5.0 (2017-03-24)

* Add swipe for touch devices ([bbde7a6](https://github.com/lukasz-galka/ngx-gallery/commit/bbde7a6))

<a name="0.4.1"></a>
# 0.4.1 (2017-03-22)

* Update description ([a2fc0fa](https://github.com/lukasz-galka/ngx-gallery/commit/a2fc0fa))
* Remove unused dependency ([233a1a7](https://github.com/lukasz-galka/ngx-gallery/commit/233a1a7))

<a name="0.4.0"></a>
# 0.4.0 (2017-03-21)

* Add option to hide image or thumbnails ([83fd1c7](https://github.com/lukasz-galka/ngx-gallery/commit/83fd1c7))

<a name="0.3.0"></a>
# 0.3.0 (2017-03-20)

* Add image description ([d1c5ba2](https://github.com/lukasz-galka/ngx-gallery/commit/d1c5ba2))

<a name="0.2.0"></a>
# 0.2.0 (2017-03-14)

* Add thumbnailsRows option ([67ea7bb](https://github.com/lukasz-galka/ngx-gallery/commit/67ea7bb))

<a name="0.1.1"></a>
# 0.1.1 (2017-03-13)

* Change default percentage for image and thumbnails ([3b3ba12](https://github.com/lukasz-galka/ngx-gallery/commit/3b3ba12))
* Increase thumbnail size if 0px margin ([ef961e6](https://github.com/lukasz-galka/ngx-gallery/commit/ef961e6))

<a name="0.1.0"></a>
# 0.1.0 (2017-03-13)

