import { fireEvent, render, screen, cleanup } from '@testing-library/react';

// component
import { NavItem } from '@/ui/components';

let renderNavItem: any;
const navName: string = 'Category';
const navLink: string = '/category';

describe('NavItem component', () => {
  beforeEach(() => {
    renderNavItem = render(<NavItem name={navName} url={navLink} />);
  });

  afterEach(() => {
    renderNavItem.unmount();
    cleanup();
  });

  it('should render NavItem macth snapshot', () => {
    expect(renderNavItem.asFragment()).toMatchSnapshot();
  });

  it('NavItem should render value passed name props', () => {
    const { getByText } = renderNavItem;

    const navItemName = getByText(navName);

    expect(navItemName).toBeInTheDocument();
  });

  it('NavItem should trigger event when clicked', () => {
    const { getByText } = renderNavItem;

    const linkElement = getByText('Category').closest('a');

    expect(linkElement).toHaveAttribute('href', '/category');
  });

  it('NavItem should render value passed name props', () => {
    const { getByText } = renderNavItem;

    const navItemName = getByText(navName);

    fireEvent.click(navItemName);
    expect(navItemName).toBeInTheDocument();
  });
});
