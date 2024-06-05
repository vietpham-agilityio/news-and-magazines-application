import { render, cleanup } from '@testing-library/react';

// component
import { Comment } from '@/ui/components';

let renderComment: any;
const userName: string = 'Raiden';
const contentValue: string = 'How the weather today?';

describe('Comment component', () => {
  beforeEach(() => {
    renderComment = render(
      <Comment userName={userName} content={contentValue} />
    );
  });

  afterEach(() => {
    renderComment.unmount();
    cleanup();
  });

  it('should render Comment macth snapshot', () => {
    expect(renderComment.asFragment()).toMatchSnapshot();
  });

  it('Comment should render value passed userName props', () => {
    const { getByText } = renderComment;

    const nameUser = getByText(userName);

    expect(nameUser).toBeInTheDocument();
  });

  it('Comment should render value passed content props', () => {
    const { getByText } = renderComment;

    const contentElement = getByText(contentValue);

    expect(contentElement).toBeInTheDocument();
  });
});
