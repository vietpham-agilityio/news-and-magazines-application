import { render } from '@testing-library/react';

// component
import { HashtagGroup } from '@/ui/features';

// mock data
import { listHashtagsItem } from '@/mocks';

let renderHashtagGroup: any;

describe('HashtagGroup feature component', () => {
  beforeEach(() => {
    renderHashtagGroup = render(
      <HashtagGroup listHashtags={listHashtagsItem} />
    );
  });

  afterEach(() => {
    renderHashtagGroup.unmount();
  });

  it('HashtagGroup should render macth snapshot', () => {
    expect(renderHashtagGroup.asFragment()).toMatchSnapshot();
  });
});
