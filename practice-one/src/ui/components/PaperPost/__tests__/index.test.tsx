import { render, cleanup } from '@testing-library/react';

// component
import { PaperPost } from '@/ui/components';

let renderPaperPost: any;
const image: string =
  'https://images.unsplash.com/photo-1563026915-32eba3e315de?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const altValue: string = 'This is museum';
const title: string = 'The Privs museum close on 5AM';
const content: string = 'The Privs start close and maintain all of the wall';

describe('PaperPost component', () => {
  beforeEach(() => {
    renderPaperPost = render(
      <PaperPost
        isLargePaper
        imageSrc={image}
        title={title}
        alt={altValue}
        content={content}
      />
    );
  });

  afterEach(() => {
    renderPaperPost.unmount();
    cleanup();
  });

  it('should render PaperPost macth snapshot', () => {
    expect(renderPaperPost.asFragment()).toMatchSnapshot();
  });

  it('should render PaperPost without isLargePaper prop to macth snapshot', () => {
    const { asFragment } = render(
      <PaperPost
        imageSrc={image}
        title={title}
        alt={altValue}
        content={content}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('PaperPost should render value passed title props', () => {
    const { getByText } = renderPaperPost;

    const titleElement = getByText(title);

    expect(titleElement).toBeInTheDocument();
  });

  it('PaperPost should render value passed content props', () => {
    const { getByText } = renderPaperPost;

    const contentElement = getByText(content);

    expect(contentElement).toBeInTheDocument();
  });

  it('PaperPost should render value passed alt props', () => {
    const { getByAltText } = renderPaperPost;

    const imageElement = getByAltText(altValue);

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('alt', 'This is museum');
  });
});
