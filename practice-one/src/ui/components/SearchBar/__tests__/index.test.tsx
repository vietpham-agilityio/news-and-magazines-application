import { render, cleanup } from '@testing-library/react';

// component
import { SearchBar } from '@/ui/components';

let renderSearchBar: any;

const nameValue: string = 'searchBar';
const placeholderValue: string = 'Search every thing';

describe('SearchBar component', () => {
  beforeEach(() => {
    renderSearchBar = render(
      <SearchBar name={nameValue} type="text" placeholder={placeholderValue} />
    );
  });

  afterEach(() => {
    renderSearchBar.unmount();
    cleanup();
  });

  it('should render SearchBar macth snapshot', () => {
    expect(renderSearchBar.asFragment()).toMatchSnapshot();
  });

  it('SearchBar should contain icon', () => {
    const { getByTestId } = renderSearchBar;

    const searchIcon = getByTestId('search-icon');

    expect(searchIcon).toBeInTheDocument();
  });

  it('SearchBar should render placeholder value to macth value passed', () => {
    const { getByPlaceholderText } = renderSearchBar;

    const inputElement = getByPlaceholderText(placeholderValue);

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('name', 'searchBar');
  });
});
