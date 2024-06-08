import { render } from '@testing-library/react';

// component
import { TagGroup } from '@/ui/features';

// mock data
import { listTagItems } from '@/mocks';

let renderTagGroup: any;

describe('TagGroup feature component', () => {
  beforeEach(() => {
    renderTagGroup = render(<TagGroup listTags={listTagItems} />);
  });

  afterEach(() => {
    renderTagGroup.unmount();
  });

  it('TagGroup should render macth snapshot', () => {
    expect(renderTagGroup.asFragment()).toMatchSnapshot();
  });
});
