import { render } from '@testing-library/react';

// component
import { CardCategorySkeleton } from '@/ui/components';

describe('CardCategorySkeleton component', () => {
  const { asFragment } = render(<CardCategorySkeleton count={1} />);

  it('should render CardCategorySkeleton macth snapshot', () => {
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the correct number of skeletons when count = 3', () => {
    const { container } = render(<CardCategorySkeleton count={3} />);

    const skeletons = container.getElementsByClassName('animate-pulse');
    expect(skeletons.length).toBe(3);
  });
});
