import { render, screen, cleanup, fireEvent } from '@testing-library/react';

// component
import { Menu } from '@/ui/components';
import { listCategories } from '@/constants';

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


//   it('should render name value to macth snapshot', () => {
//     const nameValue = screen.getByText(name);

//     expect(nameValue).toBeInTheDocument();
//   });

//   it('should render information value to macth snapshot', () => {
//     const informationValue = screen.getByText(date);

//     expect(informationValue).toBeInTheDocument();
//   });
});
