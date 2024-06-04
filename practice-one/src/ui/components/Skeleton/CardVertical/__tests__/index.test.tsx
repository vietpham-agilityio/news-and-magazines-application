import { render } from '@testing-library/react';

// component
import { CardVerticalSkeleton } from '@/ui/components';

describe('CardVerticalSkeleton component', () => {
  const { asFragment } = render(<CardVerticalSkeleton />);

  it('should render CardVerticalSkeleton macth snapshot', () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
