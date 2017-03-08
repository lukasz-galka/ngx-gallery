import { NgxSimpleGalleryPage } from './app.po';

describe('ngx-simple-gallery App', () => {
  let page: NgxSimpleGalleryPage;

  beforeEach(() => {
    page = new NgxSimpleGalleryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
