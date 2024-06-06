import { render, cleanup } from '@testing-library/react';

// component
import { Video } from '@/ui/components';

let renderVideo: any;
const title: string ="How Music Affects Your Brain (Plus 11 Artists To Listen To At Work)"
const content: string ="You’ve Read All Your Free Member-Only Stories, Become A Member To Get Unlimited Access. Your Membership Fee Supports The Voices You Want To Hear More From."
const videoSrc: string ="https://images.unsplash.com/photo-1717496002081-38a90d3cba26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"


describe('Video component', () => {
  beforeEach(() => {
    renderVideo = render(<Video videoSrc={videoSrc} title={title} content={content} />);
  });

  afterEach(() => {
    renderVideo.unmount();
    cleanup();
  });

  it('should render Video macth snapshot', () => {
    expect(renderVideo.asFragment()).toMatchSnapshot();
  });

  it('Video should render value passed title props', () => {
    const { getByText } = renderVideo

    const titleElement = getByText(title);

    expect(titleElement).toBeInTheDocument();
  });

 
  it('Video should render value passed content props', () => {
    const { getByText } = renderVideo

    const contentElement = getByText(content);

    expect(contentElement).toBeInTheDocument();
  });
});
