import { render, screen, cleanup, fireEvent } from '@testing-library/react';

// component
import { SubMenu } from '@/ui/components';

// mocks
import { listCategories } from '@/mocks';

let renderSubMenu: any;
const onClickMock = jest.fn();

describe('SubMenu component', () => {
  beforeEach(() => {
    renderSubMenu = render(<SubMenu listItem={listCategories} onClick={onClickMock} />);
  });

  afterEach(() => {
    renderSubMenu.unmount();
    cleanup();
  });

  it('should render SubMenu macth snapshot', () => {
    expect(renderSubMenu.asFragment()).toMatchSnapshot();
  });

  it('SubMenu should render correct item passed', () => {
    const menuItemElement = screen.getByText('Health and Wellness');

    expect(menuItemElement).toBeInTheDocument();
  });

  it('SubMenu should trigger event when clicked', () => {
    const menuItemElement = screen.getByText('Technology');

    fireEvent.click(menuItemElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
