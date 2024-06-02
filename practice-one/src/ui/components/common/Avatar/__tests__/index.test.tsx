import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// component
import { Avatar } from '@/ui/components';

let renderAvatar: any;

const srcImage =
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80';

describe('Avatar component', () => {
  beforeEach(() => {
    renderAvatar = render(
      <Avatar url={srcImage} width={10} height={10} alt="member" />
    );
  });

  afterEach(() => {
    renderAvatar.unmount();
  });

  it('should render Avatar macth snapshot', () => {
    expect(renderAvatar.asFragment()).toMatchSnapshot();
  });

  it('should render Avatar alt value to macth snapshot', () => {
    const altValue = screen.getByAltText('member');

    expect(altValue).toBeInTheDocument();
    expect(altValue).toHaveAttribute('alt', 'member');
  });
});
