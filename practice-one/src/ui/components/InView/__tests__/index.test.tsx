import { render, screen } from '@testing-library/react';

import InViewWrapper from '@/ui/components/InView';
import { InView } from 'react-intersection-observer';

jest.mock('react-intersection-observer', () => ({
  InView: ({ children }: { children: any }) =>
    children({ ref: jest.fn(), inView: true }),
}));

const renderInViewWithChildren = () =>
  render(
    <InViewWrapper>
      <div data-testid="child-inview">Child Content</div>
    </InViewWrapper>
  );

describe('InViewWrapper', () => {
  it('renders children when in view', () => {
    renderInViewWithChildren();

    expect(screen.getByTestId('child-inview')).toBeInTheDocument();
  });
});
