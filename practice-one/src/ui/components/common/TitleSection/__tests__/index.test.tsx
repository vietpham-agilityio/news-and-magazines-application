import { render } from '@testing-library/react';

// component
import { TitleSection } from '@/ui/components';

describe('TitleSection component', () => {
  const { asFragment } = render(<TitleSection title="Popular Posts" />);

  it('TitleSection should render macth snapshot', () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
