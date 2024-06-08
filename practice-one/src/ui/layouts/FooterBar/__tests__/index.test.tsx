import { render } from '@testing-library/react';

// component
import { FooterBar } from '@/ui/layouts';

let renderFooterBar: any;

describe('FooterBar feature component', () => {
  beforeEach(() => {
    renderFooterBar = render(
      <FooterBar />
    );
  });

  afterEach(() => {
    renderFooterBar.unmount();
  });

  it('FooterBar should render macth snapshot', () => {
    expect(renderFooterBar.asFragment()).toMatchSnapshot();
  });
});
