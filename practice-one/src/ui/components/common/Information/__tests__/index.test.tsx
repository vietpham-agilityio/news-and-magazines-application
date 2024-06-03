import { render, screen } from '@testing-library/react';

// component
import { Information } from '@/ui/components';

let renderInformation: any;
const name = 'Bagari';
const date = '02/12/2024';

describe('Information component', () => {
  beforeEach(() => {
    renderInformation = render(<Information name={name} information={date} />);
  });

  afterEach(() => {
    renderInformation.unmount();
  });

  it('should render Information macth snapshot', () => {
    expect(renderInformation.asFragment()).toMatchSnapshot();
  });

  it('should render name value to macth snapshot', () => {
    const nameValue = screen.getByText(name);

    expect(nameValue).toBeInTheDocument();
  });

  it('should render information value to macth snapshot', () => {
    const informationValue = screen.getByText(date);

    expect(informationValue).toBeInTheDocument();
  });
});
