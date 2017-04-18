import { Homework12Page } from './app.po';

describe('homework12 App', () => {
  let page: Homework12Page;

  beforeEach(() => {
    page = new Homework12Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
