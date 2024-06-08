import { fireEvent, render } from '@testing-library/react';

// component
import { TitleSection } from '@/ui/components';

let renderTitleSection: any;

const title: string = 'Trendy Posts';
const onClickFirstButtonMock = jest.fn();
const onClickSecondButtonMock = jest.fn();

describe('BoxIcon component', () => {
  beforeEach(() => {
    renderTitleSection = render(
      <TitleSection
        title={title}
        onClickArrowLeft={onClickFirstButtonMock}
        onClickArrowRight={onClickSecondButtonMock}
      />
    );
  });

  afterEach(() => {
    renderTitleSection.unmount();
  });

  it('TitleSection should render macth snapshot', () => {
    expect(renderTitleSection.asFragment()).toMatchSnapshot();
  });

  it('TitleSection should render title passing prop', () => {
    const { getByText } = renderTitleSection;
    const titleElement = getByText(title);

    expect(titleElement).toBeInTheDocument();
  });

  it('TitleSection should contain arrow left icon', () => {
    const { getByTestId } = renderTitleSection;
    const iconElement = getByTestId('arrow-left');
    fireEvent.click(iconElement);

    expect(iconElement).toBeInTheDocument();
    expect(onClickFirstButtonMock).toHaveBeenCalledTimes(1);
  });

  it('TitleSection should contain arrow right icon', () => {
    const { getByTestId } = renderTitleSection;
    const iconElement = getByTestId('arrow-right');
    fireEvent.click(iconElement);

    expect(iconElement).toBeInTheDocument();
    expect(onClickSecondButtonMock).toHaveBeenCalledTimes(1);
  });
});
