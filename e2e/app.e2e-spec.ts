import { RandomQuotePage } from './app.po';

describe('random-quote App', () => {
  let page: RandomQuotePage;

  beforeEach(() => {
    page = new RandomQuotePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
