import { render } from '@testing-library/react';

// component
import { Input } from '@/ui/components';

let renderInput: any;

const label = 'Name';
const name = 'username';
const placeholder = 'Please enter your name';

describe('Input component', () => {
  beforeEach(() => {
    renderInput = render(
      <Input name={name} label={label} type="text" placeholder={placeholder} />
    );
  });

  afterEach(() => {
    renderInput.unmount();
  });

  it('should render Input macth snapshot', () => {
    expect(renderInput.asFragment()).toMatchSnapshot();
  });

  it('Input should render placeholer match value passed prop placeholder of Input', () => {
    const { getByPlaceholderText } = renderInput

    const inputNode = getByPlaceholderText(placeholder);

    expect(inputNode).toBeInTheDocument();
  });

  it('Input should render label match value passed prop label of Input', () => {
    const { getByLabelText } = renderInput

    const labelElement = getByLabelText(label);

    expect(labelElement).toBeInTheDocument();
  });
});
