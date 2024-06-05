import { fireEvent, render, cleanup } from '@testing-library/react';

// component
import { Brand } from '@/ui/components';

let renderBrand: any;
const brandName: string ='MEGA.news';

describe('Brand component', () => {
  beforeEach(() => {
    renderBrand = render(<Brand brandName={brandName} url='mega.news.vn'/>);
  });

  afterEach(() => {
    renderBrand.unmount();
    cleanup();
  });

  it('should render Brand macth snapshot', () => {
    expect(renderBrand.asFragment()).toMatchSnapshot();
  });

  it('Brand should render value passed brandName props', () => {
    const { getByText } = renderBrand

    const nameBrand = getByText(brandName);

    fireEvent.click(nameBrand);
    expect(nameBrand).toBeInTheDocument();
  });
});
