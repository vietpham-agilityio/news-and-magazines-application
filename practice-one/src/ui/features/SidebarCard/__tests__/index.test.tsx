import { render } from '@testing-library/react';

// component
import { SidebarCard } from '@/ui/features';

// mock data
import { listPostItems } from '@/mocks';

let renderSidebarCard: any;

describe('SidebarCard feature component', () => {
  beforeEach(() => {
    renderSidebarCard = render(
      <SidebarCard listPosts={listPostItems} />
    );
  });

  afterEach(() => {
    renderSidebarCard.unmount();
  });

  it('SidebarCard should render macth snapshot', () => {
    expect(renderSidebarCard.asFragment()).toMatchSnapshot();
  });
});
