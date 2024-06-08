import { render } from '@testing-library/react';

// component
import { Footer } from '@/ui/layouts';

let renderFooter: any;

describe('Footer feature component', () => {
  beforeEach(() => {
    renderFooter = render(
      <Footer />
    );
  });

  afterEach(() => {
    renderFooter.unmount();
  });

  it('Footer should render macth snapshot', () => {
    expect(renderFooter.asFragment()).toMatchSnapshot();
  });
});
