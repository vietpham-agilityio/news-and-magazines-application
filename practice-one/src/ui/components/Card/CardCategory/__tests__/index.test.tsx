import { render, waitFor, screen } from '@testing-library/react';

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
        id: "2"
      })
    );

    await waitFor(() => {
      expect(container).toMatchSnapshot();
      expect(screen.getByText('Benzamine')).toBeInTheDocument();
      expect(screen.getByAltText('author this post')).toBeInTheDocument();
      expect(screen.getByText('Go Home After Long Time')).toBeInTheDocument();
      expect(screen.getByText("Download torrents from verified or trusted uploaders. If you're a BitTorrent user looking for safety tips, use this method. Both of the big-name BitTorrent indexers (The Pirate Bay and KickAssTorrents) use symbols to highlight torrents uploaded by verified users.")).toBeInTheDocument();
    });
  });
});
