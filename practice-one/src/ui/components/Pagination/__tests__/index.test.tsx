import { fireEvent, render } from '@testing-library/react';

// component
import { Pagination } from '@/ui/components';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => {
  const originalModule = jest.requireActual('next/navigation');

  return {
    ...originalModule,
    useRouter: jest.fn(),
  };
});

describe('Pagination', () => {
  const mockUseRouter = useRouter as jest.Mock;
  mockUseRouter.mockReturnValue({
    push: jest.fn(),
  });

  const renderPagination = () => render(<Pagination categoryId={2} pageCount={4} />);

  it('should render Pagination macth snapshot', () => {
    const { asFragment } = renderPagination();
    expect(asFragment()).toMatchSnapshot();
  });

  it('Pagination should trigger event when clicked', () => {
    const { getByTestId, getByText } = renderPagination();

    const secondaryButton = getByTestId('pagination-button-2');

    expect(secondaryButton).toBeInTheDocument();

    fireEvent.click(secondaryButton);

    const previousButton = getByText('Previous');
    const nextButton = getByText('Next');

    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it('Pagination should render ui when trigger event', () => {
    const { getByTestId } = renderPagination();

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
