import { Injectable, ElementRef, Renderer } from '@angular/core';

@Injectable()
export class NgxGalleryHelperService {

    private swipeHandlers: Map<string, Function[]> = new Map();

    constructor(private renderer: Renderer) {}

    manageSwipe(status: boolean, element: ElementRef, id: string, nextHandler: Function, prevHandler: Function): void {

        let handlers = this.getSwipeHandlers(id);

        // swipeleft and swiperight are available only if hammerjs is included
        try {
            if (status && !handlers) {
                this.swipeHandlers.set(id, [
                    this.renderer.listen(element.nativeElement, 'swipeleft', () => nextHandler()),
                    this.renderer.listen(element.nativeElement, 'swiperight', () => prevHandler())
                ]);
            } else if(!status && handlers) {
                handlers.map(handler => handler());
                this.removeSwipeHandlers(id);
            }
        } catch(e) {}
    }

    private getSwipeHandlers(id: string): Function[] {
        return this.swipeHandlers.get(id);
    }

    private removeSwipeHandlers(id: string): void {
        this.swipeHandlers.delete(id);
    }
}
