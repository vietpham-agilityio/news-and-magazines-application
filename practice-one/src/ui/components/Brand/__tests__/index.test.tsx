import { fireEvent, render, screen, cleanup } from '@testing-library/react';

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

    expect(nameBrand).toBeInTheDocument();
  });

  it('Brand should trigger event when clicked', () => {
    const brandElement = screen.getByText(brandName);

    fireEvent.click(brandElement);
  });
});
