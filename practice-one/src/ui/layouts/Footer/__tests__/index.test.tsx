import { render, waitFor, screen } from '@testing-library/react';

// service
import { getCategoryData } from '@/services';

// mocks
import { mockCategoryData } from '@/mocks';

// component
import { Footer } from '@/ui/layouts';

jest.mock('../../../../services', () => ({
  ...jest.requireActual('../../../../services'),
  getCategoryData: jest.fn(),
}));

beforeEach(() => {
  (getCategoryData as jest.MockedFunction<typeof Object>).mockResolvedValue(
    mockCategoryData
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('Footer component', () => {
  test('Should render match with snapshot.', async () => {
    const { container } = render(await Footer());

    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });
});
