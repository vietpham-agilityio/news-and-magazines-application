import { render, waitFor } from '@testing-library/react';

// service
import { getCategoryData, getLatestComment } from '@/services';

// mocks
import { mockCategoryData, mockCommentData } from '@/mocks';

// component
import { Footer } from '@/ui/layouts';

jest.mock('../../../../services', () => ({
  ...jest.requireActual('../../../../services'),
  getCategoryData: jest.fn(),
  getLatestComment: jest.fn(),
}));

beforeEach(() => {
  (getCategoryData as jest.MockedFunction<typeof Object>).mockResolvedValue(
    mockCategoryData
  );
  (getLatestComment as jest.MockedFunction<typeof Object>).mockResolvedValue(
    mockCommentData
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
