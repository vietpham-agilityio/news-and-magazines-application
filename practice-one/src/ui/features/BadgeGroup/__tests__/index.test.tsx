import { render, waitFor } from '@testing-library/react';
import { expect } from '@jest/globals';

// service
import {
  getPostDataById,
  getCategoryById,
  getCommentByPostId,
  getCategoryByPostId,
} from '@/services';

// component
import { BadgeGroup } from '@/ui/features';

// mock data
import {
  mockCommentData,
  mockPostDetailData,
  mockCategoryResponseData,
  mockPostCategoriesResponse,
} from '@/mocks';

jest.mock('../../../../services', () => ({
  getPostDataById: jest.fn(),
  getCategoryById: jest.fn(),
  getCommentByPostId: jest.fn(),
  getCategoryByPostId: jest.fn(),
}));

describe('BadgeGroup component', () => {
  beforeEach(() => {
    (
      getCommentByPostId as jest.MockedFunction<typeof Object>
    ).mockResolvedValue(mockCommentData);

    (getPostDataById as jest.MockedFunction<typeof Object>).mockResolvedValue(
      mockPostDetailData
    );

    (getCategoryById as jest.MockedFunction<typeof Object>).mockResolvedValue(
        mockCategoryResponseData
    );

    (
      getCategoryByPostId as jest.MockedFunction<typeof Object>
    ).mockResolvedValue(mockPostCategoriesResponse);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Should render match with snapshot.', async () => {
    const { container } = render(
      await BadgeGroup({
        postId: '1',
      })
    );

    waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });
});
