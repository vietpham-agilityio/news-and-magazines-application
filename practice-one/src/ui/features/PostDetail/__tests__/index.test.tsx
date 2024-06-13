import { render, waitFor, screen } from '@testing-library/react';

// service
import { getPostDataById } from '@/services';

// component
import { PostDetail } from '@/ui/features';
import { mockPostDetailData } from '@/mocks';

jest.mock('../../../../services', () => ({
  ...jest.requireActual('../../../../services'),
  getPostDataById: jest.fn(),
}));

beforeEach(() => {
  (getPostDataById as jest.MockedFunction<typeof Object>).mockResolvedValue(
    mockPostDetailData
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('PostDetail component', () => {
  test('Should render match with snapshot.', async () => {
    const { container } = render(await PostDetail({ postId: 1 }));

    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });

  test('Should render default values when attributes are missing.', async () => {
    (getPostDataById as jest.MockedFunction<typeof Object>).mockResolvedValue(
      {}
    );

    const { container } = render(await PostDetail({ postId: 1 }));

    await waitFor(() => {
      expect(container).toMatchSnapshot();
      expect(screen.getByText('Title is not available')).toBeInTheDocument();
      expect(screen.getByText('Content is not available')).toBeInTheDocument();
      expect(screen.getByAltText('Title is not available')).toHaveAttribute('src', '');
    });
  });
});
