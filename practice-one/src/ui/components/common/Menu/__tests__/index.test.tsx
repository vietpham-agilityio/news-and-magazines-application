import { render, screen, cleanup, fireEvent } from '@testing-library/react';

// component
import { Menu } from '@/ui/components';

// mocks
import { listCategories } from '@/mocks';

let renderMenu: any;
const menuName = 'Categories';

describe('Menu component', () => {
  beforeEach(() => {
    renderMenu = render(<Menu name={menuName} listMenu={listCategories} />);
  });

  afterEach(() => {
    renderMenu.unmount();
    cleanup();
  });

  it('should render Menu macth snapshot', () => {
    expect(renderMenu.asFragment()).toMatchSnapshot();
  });

  it('Menu should trigger event when clicked', () => {
    const menuElement = screen.getByTestId('menu-item');

    fireEvent.click(menuElement);
  });
});
