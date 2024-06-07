import { render } from '@testing-library/react';

// component
import { Title } from '@/ui/components';

describe('Title component', () => {
  const { asFragment } = render(<Title title="Popular Posts" />);

  it('Title should render macth snapshot', () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
