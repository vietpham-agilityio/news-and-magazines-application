import { render } from '@testing-library/react';

// component
import { TextArea } from '@/ui/components';

let renderTextArea: any;

const label = 'Comment';
const placeholder = 'Please enter your comment';

describe('TextArea component', () => {
  beforeEach(() => {
    renderTextArea = render(
      <TextArea label={label} placeholder={placeholder} />
    );
  });

  afterEach(() => {
    renderTextArea.unmount();
  });

  it('should render TextArea macth snapshot', () => {
    expect(renderTextArea.asFragment()).toMatchSnapshot();
  });

  it('TextArea should render placeholer match value passed prop placeholder of TextArea', () => {
    const { getByPlaceholderText } = renderTextArea

    const textAreaNode = getByPlaceholderText(placeholder);

    expect(textAreaNode).toBeInTheDocument();
  });

  it('TextArea should render label match value passed prop label of TextArea', () => {
    const { getByLabelText } = renderTextArea

    const labelElement = getByLabelText(label);

    expect(labelElement).toBeInTheDocument();
  });
});
