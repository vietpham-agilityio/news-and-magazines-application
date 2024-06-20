import { fireEvent, render, screen, cleanup } from '@testing-library/react';

// component
import { Pagination } from '@/ui/components';

// mock data
import { listPaginationPage } from '@/mocks';

let renderPagination: any;

describe('Pagination component', () => {
  beforeEach(() => {
    renderPagination = render(
      <Pagination pageCount={4} />
    );
  });

  afterEach(() => {
    renderPagination.unmount();
    cleanup();
  });

  it('should render Pagination macth snapshot', () => {
    expect(renderPagination.asFragment()).toMatchSnapshot();
  });

  it('Pagination should trigger event when clicked', () => {
    const { getByTestId, getByText } = renderPagination;

    const secondaryButton = getByTestId('pagination-button-2');

    expect(secondaryButton).toBeInTheDocument();

    fireEvent.click(secondaryButton);

    const previousButton = getByText('Previous');
    const nextButton = getByText('Next');

    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it('Pagination should render ui when trigger event', () => {
    const { getByTestId } = renderPagination;

    const secondaryButton = getByTestId('pagination-button-2');

    expect(secondaryButton).toBeInTheDocument();

    fireEvent.click(secondaryButton);

    const previousButton = getByTestId('previous-pagination-button');

    expect(previousButton).toBeInTheDocument();

    fireEvent.click(previousButton);

    const nextButton = getByTestId('next-pagination-button');

    expect(nextButton).toBeInTheDocument();

    fireEvent.click(nextButton);
  });
});
