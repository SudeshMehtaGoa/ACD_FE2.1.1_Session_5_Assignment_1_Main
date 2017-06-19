import { S5A1Page } from './app.po';

describe('s5-a1 App', () => {
  let page: S5A1Page;

  beforeEach(() => {
    page = new S5A1Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
