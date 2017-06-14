import { ChartStressPage } from './app.po';

describe('chart-stress App', () => {
  let page: ChartStressPage;

  beforeEach(() => {
    page = new ChartStressPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
