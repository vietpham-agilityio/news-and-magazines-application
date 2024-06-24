import { render } from '@testing-library/react';

// component
import { BadgeGroupSkeleton } from '@/ui/components';

describe('BadgeGroupSkeleton component', () => {
  const { asFragment } = render(<BadgeGroupSkeleton />);

  it('should render BadgeGroupSkeleton macth snapshot', () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
