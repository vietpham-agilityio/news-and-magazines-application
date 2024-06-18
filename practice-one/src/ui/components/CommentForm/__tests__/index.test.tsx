import { render, cleanup } from '@testing-library/react';

// component
import { CommentForm } from '@/ui/components';

let renderCommentForm: any;

describe('CommentForm component', () => {
  beforeEach(() => {
    renderCommentForm = render(<CommentForm />);
  });

  afterEach(() => {
    renderCommentForm.unmount();
    cleanup();
  });

  it('should render CommentForm macth snapshot', () => {
    expect(renderCommentForm.asFragment()).toMatchSnapshot();
  });
});
