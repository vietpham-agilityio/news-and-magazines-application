import { render } from '@testing-library/react';

// component
import { DetailPostSkeleton } from '@/ui/components';

describe('DetailPostSkeleton component', () => {
  const { asFragment } = render(<DetailPostSkeleton />);

  it('should render DetailPostSkeleton macth snapshot', () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
