import { render } from '@testing-library/react';

// component
import { CardPostSkeleton } from '@/ui/components';

describe('CardPostSkeleton component', () => {
  const { asFragment } = render(<CardPostSkeleton count={1} />);

  it('should render CardPostSkeleton macth snapshot', () => {
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the correct number of skeletons when count = 3', () => {
    const { container } = render(<CardPostSkeleton count={3} />);

    const skeletons = container.getElementsByClassName('animate-pulse');
    expect(skeletons.length).toBe(3);
  });
});
