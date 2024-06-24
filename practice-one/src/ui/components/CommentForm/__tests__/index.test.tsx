import { render, cleanup } from '@testing-library/react';

// component
import { CommentForm } from '@/ui/components';
import { useFormState } from 'react-dom';

// Mock the useFormState hook
jest.mock('react-dom', () => {
  const originalModule = jest.requireActual('react-dom');

  return {
    ...originalModule,
    useFormState: jest.fn(),
  };
});

describe('CommentForm', () => {
  const postId = '2';
  const initialState = {
    message: '',
  };

  beforeEach(() => {
    useFormState.mockImplementation(() => [
      { message: {} },
      jest.fn(),
    ]);
  });

  const renderCommentForm = () => render(<CommentForm postId="2" />);
  it('should render CommentForm macth snapshot', () => {
    const { asFragment } = renderCommentForm();
    expect(asFragment()).toMatchSnapshot();
  });
});
