import { render } from '@testing-library/react';

// component
import { Header } from '@/ui/layouts';

let renderHeader: any;

describe('Header feature component', () => {
  beforeEach(() => {
    renderHeader = render(
      <Header />
    );
  });

  afterEach(() => {
    renderHeader.unmount();
  });

  it('Header should render macth snapshot', () => {
    expect(renderHeader.asFragment()).toMatchSnapshot();
  });
});
