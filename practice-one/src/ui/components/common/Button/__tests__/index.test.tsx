import { fireEvent, render, screen } from '@testing-library/react';

// component
import { Button } from '@/ui/components';
import { ArrowLeft, ArrowRight } from '@/ui/components/Icons';

let renderButton: any;
const onClickMock = jest.fn();

describe('Button component', () => {
  beforeEach(() => {
    renderButton = render(
      <Button
        isMarginBottom
        label="Subcriber"
        textColor="text-dark-100"
        bgColor="bg-primary-100"
        onClick={onClickMock}
      />
    );
  });

  afterEach(() => {
    renderButton.unmount();
  });

  it('Button should render macth snapshot', () => {
    expect(renderButton.asFragment()).toMatchSnapshot();
  });

  it('Button should render label alt value to macth snapshot', () => {
    const labelValue = screen.getByText('Subcriber');

    expect(labelValue).toBeInTheDocument();
  });

  it('Button should trigger event when clicked', () => {
    const buttonElement = screen.getByRole('button');

    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('Button should contain left icon', () => {
    const { getByTestId } = render(
      <Button
        isMarginBottom
        label="Subcriber"
        textColor="text-dark-100"
        bgColor="bg-primary-100"
        leftIcon={<ArrowLeft />}
        onClick={onClickMock}
      />
    );

    const iconElement = getByTestId('arrow-left');

    expect(iconElement).toBeInTheDocument();
  });

  it('Button should contain right icon', () => {
    const { getByTestId } = render(
      <Button
        isMarginBottom
        label="Subcriber"
        textColor="text-dark-100"
        bgColor="bg-primary-100"
        rightIcon={<ArrowRight />}
        onClick={onClickMock}
      />
    );

    const iconElement = getByTestId('arrow-right');

    expect(iconElement).toBeInTheDocument();
  });
});
