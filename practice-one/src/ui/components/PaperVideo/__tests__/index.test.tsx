import { render, cleanup } from '@testing-library/react';

// component
import { PaperVideo } from '@/ui/components';

let renderPaperVideo: any;
const image: string ='https://images.unsplash.com/photo-1563026915-32eba3e315de?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const altValue:string = 'This is museum';
const title: string ='The Privs museum close on 5AM';
const content: string ='The Privs start close and maintain all of the wall';


describe('PaperVideo component', () => {
  beforeEach(() => {
    renderPaperVideo = render(<PaperVideo imageSrc={image} title={title} alt={altValue} content={content} />);
  });

  afterEach(() => {
    renderPaperVideo.unmount();
    cleanup();
  });

  it('should render PaperVideo macth snapshot', () => {
    expect(renderPaperVideo.asFragment()).toMatchSnapshot();
  });

  it('PaperVideo should render value passed title props', () => {
    const { getByText } = renderPaperVideo

    const titleElement = getByText(title);

    expect(titleElement).toBeInTheDocument();
  });

 
  it('PaperVideo should render value passed content props', () => {
    const { getByText } = renderPaperVideo

    const contentElement = getByText(content);

    expect(contentElement).toBeInTheDocument();
  });

  it('PaperVideo should render value passed alt props', () => {
    const { getByAltText } = renderPaperVideo

    const imageElement = getByAltText(altValue);

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('alt', 'This is museum');

  });
});
