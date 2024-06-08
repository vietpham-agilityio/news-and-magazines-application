import { render } from '@testing-library/react';

// component
import { RightSidebar } from '@/ui/features';

let renderRightSidebar: any;

describe('RightSidebar feature component', () => {
  beforeEach(() => {
    renderRightSidebar = render(
      <RightSidebar />
    );
  });

  afterEach(() => {
    renderRightSidebar.unmount();
  });

  it('RightSidebar should render macth snapshot', () => {
    expect(renderRightSidebar.asFragment()).toMatchSnapshot();
  });
});
