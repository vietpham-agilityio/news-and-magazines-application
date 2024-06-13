import { render, waitFor } from '@testing-library/react';

// service
import { getCategoryData } from '@/services';

// component
import { CategoryMenu } from '@/ui/features';
import { mockCategoryData } from '@/mocks';

jest.mock('../../../../services', () => ({
  ...jest.requireActual('../../../../services'),
  getCategoryData: jest.fn(),
}));

beforeEach(() => {
  (getCategoryData as jest.MockedFunction<typeof Object>).mockResolvedValue(
    mockCategoryData
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('CategoryMenu component', () => {
  test('Should render match with snapshot.', async () => {
    const { container } = render(await CategoryMenu());

    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });

  test('Should render with falsy value response and match with snapshot.', async () => {
    (getCategoryData as jest.MockedFunction<typeof Object>).mockResolvedValue(
      []
    );
    const { container } = render(await CategoryMenu());

    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });
});
