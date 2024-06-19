import { render, waitFor } from '@testing-library/react';

// service
import { getCommentByPostId } from '@/services';

// component
import { CommentGroup } from '@/ui/features';
import { mockCommentData } from '@/mocks';

jest.mock('../../../../services', () => ({
  ...jest.requireActual('../../../../services'),
  getCommentByPostId: jest.fn(),
}));

beforeEach(() => {
  (getCommentByPostId as jest.MockedFunction<typeof Object>).mockResolvedValue(
    mockCommentData
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('CommentGroup component', () => {
  test('Should render match with snapshot.', async () => {
    const { container } = render(await CommentGroup({ postId: 1 }));

    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });
});
