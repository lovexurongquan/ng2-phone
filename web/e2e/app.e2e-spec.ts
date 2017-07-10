import { PhonePage } from './app.po';

describe('phone App', () => {
  let page: PhonePage;

  beforeEach(() => {
    page = new PhonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
