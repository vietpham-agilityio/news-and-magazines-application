import { render } from '@testing-library/react';

// component
import { CommentSkeleton } from '@/ui/components';

describe('CommentSkeleton component', () => {
  const { asFragment } = render(<CommentSkeleton />);

  it('should render CommentSkeleton macth snapshot', () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
