import { render, waitFor } from '@testing-library/react';

// service
import { getPostDataById } from '@/services';

// component
import { CardSingle } from '@/ui/components';
import { mockPostDetailData } from '@/mocks';

jest.mock('../../../../../services', () => ({
  ...jest.requireActual('../../../../../services'),
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

describe('CardSingle component', () => {
  test('Should render match with snapshot.', async () => {
    const { container } = render(
      await CardSingle({
        id: '22',
      })
    );

    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });
});
