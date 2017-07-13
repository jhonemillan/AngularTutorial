import { MtbShopPage } from './app.po';

describe('mtb-shop App', () => {
  let page: MtbShopPage;

  beforeEach(() => {
    page = new MtbShopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
