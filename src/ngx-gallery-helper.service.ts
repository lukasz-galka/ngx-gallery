import { Injectable, ElementRef, Renderer } from '@angular/core';

@Injectable()
export class NgxGalleryHelperService {

    private swipeHandlers: Map<string, Function[]> = new Map<string, Function[]>();

    constructor(private renderer: Renderer) {}

    manageSwipe(status: boolean, element: ElementRef, id: string, nextHandler: Function, prevHandler: Function): void {

        const handlers = this.getSwipeHandlers(id);

        // swipeleft and swiperight are available only if hammerjs is included
        try {
            if (status && !handlers) {
                this.swipeHandlers.set(id, [
                    this.renderer.listen(element.nativeElement, 'swipeleft', () => nextHandler()),
                    this.renderer.listen(element.nativeElement, 'swiperight', () => prevHandler())
                ]);
            } else if (!status && handlers) {
                handlers.map((handler) => handler());
                this.removeSwipeHandlers(id);
            }
        } catch (e) {}
    }

    validateUrl(url: string): string {
        if (url.replace) {
            return url.replace(new RegExp(' ', 'g'), '%20')
                .replace(new RegExp('\'', 'g'), '%27');
        } else {
            return url;
        }
    }

    getBackgroundUrl(image: string) {
        return 'url(\'' + this.validateUrl(image) + '\')';
    }

    private getSwipeHandlers(id: string): Function[] | undefined {
        return this.swipeHandlers.get(id);
    }

    private removeSwipeHandlers(id: string): void {
        this.swipeHandlers.delete(id);
    }

    getFileType (fileSource: string): string {
        if (fileSource.startsWith('data:')) {
          return fileSource.substr(5, Math.min(fileSource.indexOf(';'), fileSource.indexOf('/')) - 5);
        }
        let fileExtension = fileSource.split('.').pop().toLowerCase();
        if (!fileExtension
          || fileExtension == 'jpeg' || fileExtension == 'jpg'
          || fileExtension == 'png' || fileExtension == 'bmp'
          || fileExtension == 'gif') {
          return 'image';
        }
        else if (fileSource.substr(0, 10) === 'data:video' ||
          fileExtension == 'avi' || fileExtension == 'flv'
          || fileExtension == 'wmv' || fileExtension == 'mov'
          || fileExtension == 'mp4') {
          return 'video';
        }
        return 'unknown';
    }
}
