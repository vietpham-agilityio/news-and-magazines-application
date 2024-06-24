import { render } from '@testing-library/react';

// component
import { SubmitButton } from '@/ui/components';
import { ChatBoxSmall } from '@/ui/components/Icons';
import { useFormStatus } from 'react-dom';

jest.mock('react-dom', () => {
  const originalModule = jest.requireActual('react-dom');

  return {
    ...originalModule,
    useFormStatus: jest.fn(),
  };
});

let renderSubmitButton: any;

describe('SubmitButton component', () => {
  const mockUseFormStatus = useFormStatus as jest.Mock;
  mockUseFormStatus.mockReturnValue({ pending: false });

    renderSubmitButton = render(
      <SubmitButton
        label="Comment"
        leftIcon={<ChatBoxSmall />}
      />
    );

  it('SubmitButton should render macth snapshot', () => {
    expect(renderSubmitButton.asFragment()).toMatchSnapshot();
  });

  it('SubmitButton should contain left icon', () => {
    const { getByTestId } = render(
      <SubmitButton
        label="Comment"
        leftIcon={<ChatBoxSmall />}
      />
    );

    const iconElement = getByTestId('chat-box-icon');
    expect(iconElement).toBeInTheDocument();
  });
});
