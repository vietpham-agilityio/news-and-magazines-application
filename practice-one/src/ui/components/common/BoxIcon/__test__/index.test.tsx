import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// component
import { BoxIcon } from '@/ui/components';
import { Close } from '@/ui/components/Icons';

let renderBoxIcon: any;
const onClickMock = jest.fn();

const srcImage =
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80';

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
    const { getByTestId } = render(
      <BoxIcon
        icon={<Close data-testid="box-icon" />}
        onClick={onClickMock}
        height="10"
        width="10"
      />
    );

    const iconElement = getByTestId('box-icon');

    expect(iconElement).toBeInTheDocument();
  });
});
