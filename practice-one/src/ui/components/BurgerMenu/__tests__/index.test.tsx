import { fireEvent, render, screen, cleanup } from '@testing-library/react';

// component
import { BurgerMenu } from '@/ui/components';

// mock data
import { listCategories } from '@/mocks';

let renderBurgerMenu: any;

describe('BurgerMenu component', () => {
  beforeEach(() => {
    renderBurgerMenu = render(<BurgerMenu listCategories={listCategories} />);
  });

  afterEach(() => {
    renderBurgerMenu.unmount();
    cleanup();
  });

  it('should render BurgerMenu macth snapshot', () => {
    expect(renderBurgerMenu.asFragment()).toMatchSnapshot();
  });

  it('BurgerMenu should trigger event when clicked', () => {
    const buttonElement = screen.getByRole('button');

    fireEvent.click(buttonElement);

    const { getByText } = renderBurgerMenu;

    const categoriesItem = getByText('Categories');
    expect(categoriesItem).toBeInTheDocument();

    fireEvent.click(categoriesItem);
    const technologyItem = getByText('Technology');
    expect(technologyItem).toBeInTheDocument();
    fireEvent.click(technologyItem);
  });
});
