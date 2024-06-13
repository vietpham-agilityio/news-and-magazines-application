import { render, waitFor, screen } from '@testing-library/react';

// service
import { getAuthorById } from '@/services';

// component
import { CardPost } from '@/ui/components';
import { mockAuthorData } from '@/mocks';

jest.mock('../../../../../services', () => ({
  ...jest.requireActual('../../../../../services'),
  getAuthorById: jest.fn(),
}));

const idValue: string = '2';
const titleValue: string = 'Go Home After Long Time';
const contentValue: string =
  "Download torrents from verified or trusted uploaders. If you're a BitTorrent user looking for safety tips, use this method. Both of the big-name BitTorrent indexers (The Pirate Bay and KickAssTorrents) use symbols to highlight torrents uploaded by verified users.";
const imageSrcValue: string =
  'https://images.unsplash.com/photo-1716223996696-ad6252a7fe7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D';
const altValue: string = 'Download torrents from verified or trusted uploaders';
const authorIdValue: string = '2';
const informationValue: string = '2024-5-30';

beforeEach(() => {
  (getAuthorById as jest.MockedFunction<typeof Object>).mockResolvedValue(
    mockAuthorData
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('CardPost component', () => {
  test('Should render match with snapshot.', async () => {
    const { container } = render(
      await CardPost({
        id: idValue,
        title: titleValue,
        content: contentValue,
        imageSrc: imageSrcValue,
        alt: altValue,
        authorId: authorIdValue,
        information: informationValue,
      })
    );

    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });

  test('Should render CardPost with isVertical passing and match with snapshot.', async () => {
    const { container } = render(
      await CardPost({
        id: idValue,
        title: titleValue,
        content: contentValue,
        imageSrc: imageSrcValue,
        alt: altValue,
        authorId: authorIdValue,
        information: informationValue,
        isVertical: true,
      })
    );

    await waitFor(() => {
      expect(container).toMatchSnapshot();
      expect(screen.getByText(titleValue)).toBeInTheDocument();
      expect(screen.getByText(contentValue)).toBeInTheDocument();
    });
  });
});
