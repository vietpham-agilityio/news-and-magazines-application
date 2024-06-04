import { render, screen, cleanup } from '@testing-library/react';

// component
import { Tag } from '@/ui/components';

// icons
import { File } from '@/ui/components/Icons';

let renderTag: any;
const tagName = 'Categories: Sport';

describe('Tag component', () => {
  beforeEach(() => {
    renderTag = render(<Tag content={tagName} icon={<File />} />);
  });

  afterEach(() => {
    renderTag.unmount();
    cleanup();
  });

  it('should render Tag macth snapshot', () => {
    expect(renderTag.asFragment()).toMatchSnapshot();
  });

  it('Tag should contain icon', () => {
    const iconElement = screen.getByTestId('file-icon');

    expect(iconElement).toBeInTheDocument();
  });

  it('Tag should render content value to macth value passed', () => {
    const contentValue = screen.getByText(tagName);

    expect(contentValue).toBeInTheDocument();
  });
});
