import { MutipleQuestionsPage } from './app.po';

describe('mutiple-questions App', () => {
  let page: MutipleQuestionsPage;

  beforeEach(() => {
    page = new MutipleQuestionsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
