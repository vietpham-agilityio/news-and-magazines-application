import { render, cleanup, screen } from '@testing-library/react';

// component
import { Comment } from '@/ui/components';

let renderComment: any;
const userName: string = 'Raiden';
const contentValue: string = 'How the weather today?';
const publicDateValue: string = '23-12-June';

describe('Comment component', () => {
  beforeEach(() => {
    renderComment = render(
      <Comment
        userName={userName}
        content={contentValue}
        publicDate={publicDateValue}
      />
    );
  });

  afterEach(() => {
    renderComment.unmount();
    cleanup();
  });

  it('should render Comment macth snapshot', () => {
    expect(renderComment.asFragment()).toMatchSnapshot();
  });

  it('should render Comment without publicDate prop and macth snapshot', () => {
    const commentWithoutPublicDate = render(
      <Comment userName={userName} content={contentValue} />
    );
    expect(commentWithoutPublicDate.asFragment()).toMatchSnapshot();
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

  it('Comment should render value passed publicDate props', () => {
    const { getByText } = renderComment;

    const publicDateContent = getByText(publicDateValue);

    const avatarElement = screen.getByAltText('Author this comment')

    expect(avatarElement).toBeInTheDocument();
    expect(publicDateContent).toBeInTheDocument();
  });
});
