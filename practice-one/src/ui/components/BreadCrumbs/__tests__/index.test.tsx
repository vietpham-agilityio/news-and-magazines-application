import { render, cleanup } from '@testing-library/react';

// component
import { BreadCrumbs } from '@/ui/components';

// mock data
import { listBreadCrumb } from '@/mocks';

let renderBreadCrumbs: any;

describe('BreadCrumbs component', () => {
  beforeEach(() => {
    renderBreadCrumbs = render(<BreadCrumbs listBreadCrumb={listBreadCrumb} />);
  });

  afterEach(() => {
    renderBreadCrumbs.unmount();
    cleanup();
  });

  it('should render BreadCrumbs macth snapshot', () => {
    expect(renderBreadCrumbs.asFragment()).toMatchSnapshot();
  });
});
