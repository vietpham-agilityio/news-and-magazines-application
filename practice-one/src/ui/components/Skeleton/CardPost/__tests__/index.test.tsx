import { render } from '@testing-library/react';

// component
import { CardPostSkeleton } from '@/ui/components';

describe('CardPostSkeleton component', () => {
  const { asFragment } = render(<CardPostSkeleton />);

  it('should render CardPostSkeleton macth snapshot', () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
