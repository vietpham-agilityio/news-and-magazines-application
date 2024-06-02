import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// component
import { BoxIcon } from '@/ui/components';
import { Close } from '@/ui/components/Icons';

let renderBoxIcon: any;
const onClickMock = jest.fn();

describe('BoxIcon component', () => {
  beforeEach(() => {
    renderBoxIcon = render(<BoxIcon icon={<Close />} onClick={onClickMock} />);
  });

  afterEach(() => {
    renderBoxIcon.unmount();
  });

  it('should render BoxIcon macth snapshot', () => {
    expect(renderBoxIcon.asFragment()).toMatchSnapshot();
  });

  it('BoxIcon should trigger event when clicked', () => {
    const boxIconElement = screen.getByRole('button');

    fireEvent.click(boxIconElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('BoxIcon should contain icon', () => {
    const { getByTestId } = renderBoxIcon

    const iconElement = getByTestId('close-icon');

    expect(iconElement).toBeInTheDocument();
  });
});
