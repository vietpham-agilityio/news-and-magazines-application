import { render, waitFor } from '@testing-library/react';

// service
import { getPostDataByAttribute } from '@/services';

// component
import { SidebarCard } from '@/ui/features';
import { mockPostsByAttributeData } from '@/mocks';

jest.mock('../../../../services', () => ({
  ...jest.requireActual('../../../../services'),
  getPostDataByAttribute: jest.fn(),
}));

beforeEach(() => {
  (getPostDataByAttribute as jest.MockedFunction<typeof Object>).mockResolvedValue(
    mockPostsByAttributeData
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('SidebarCard component', () => {
  test('Should render match with snapshot.', async () => {
    const { container } = render(await SidebarCard());

    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });
});
