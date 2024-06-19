import { render, waitFor } from '@testing-library/react';

// service
import { getAuthorById, getPostDataById } from '@/services';

// component
import { CardCategory } from '@/ui/components';
import { mockAuthorData, mockPostDetailData } from '@/mocks';

jest.mock('../../../../../services', () => ({
  ...jest.requireActual('../../../../../services'),
  getAuthorById: jest.fn(),
  getPostDataById: jest.fn(),
}));

beforeEach(() => {
  (getAuthorById as jest.MockedFunction<typeof Object>).mockResolvedValue(
    mockAuthorData
  );
  (getPostDataById as jest.MockedFunction<typeof Object>).mockResolvedValue(
    mockPostDetailData
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('CardCategory component', () => {
  test('Should render match with snapshot.', async () => {
    const { container } = render(
      await CardCategory({
        id: 2
      })
    );

    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });
});
