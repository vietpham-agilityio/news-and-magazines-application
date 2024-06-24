import { render, waitFor } from '@testing-library/react';
import { expect } from '@jest/globals';

// service
import { getAuthorById, getPostDataById } from '@/services';

// component
import { AuthorInformation } from '@/ui/features';

// mock data
import { mockAuthorData, mockPostDetailData } from '@/mocks';

jest.mock('../../../../services', () => ({
  getAuthorById: jest.fn(),
  getPostDataById: jest.fn(),
}));

describe('AuthorInformation component', () => {
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

  test('Should render match with snapshot.', async () => {
    const { container } = render(
      await AuthorInformation({
        postId: '1',
      })
    );

    waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });
});
