import { AngRpsPage } from './app.po';

describe('ang-rps App', () => {
  let page: AngRpsPage;

  beforeEach(() => {
    page = new AngRpsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
