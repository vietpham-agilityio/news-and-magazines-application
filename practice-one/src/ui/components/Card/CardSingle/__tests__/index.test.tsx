import { render, cleanup } from '@testing-library/react';

// component
import { CardSingle } from '@/ui/components';

let renderCardSingle: any;
const titleValue: string = 'Go Home After Long Time';
const contentValue: string =
  'Download torrents from verified or trusted uploaders';
const imageSrc: string =
  'https://images.unsplash.com/photo-1716223996696-ad6252a7fe7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D';

describe('CardSingle component', () => {
  beforeEach(() => {
    renderCardSingle = render(
      <CardSingle
        id="1"
        imageSrc={imageSrc}
        title={titleValue}
        content={contentValue}
      />
    );
  });

  afterEach(() => {
    renderCardSingle.unmount();
    cleanup();
  });

  it('should render CardSingle macth snapshot', () => {
    expect(renderCardSingle.asFragment()).toMatchSnapshot();
  });

  it('CardSingle should render value passed title props', () => {
    const { getByText } = renderCardSingle;

    const titleCard = getByText(titleValue);

    expect(titleCard).toBeInTheDocument();
  });

  it('CardSingle should render value passed content props', () => {
    const { getByText } = renderCardSingle;

    const contentCard = getByText(contentValue);

    expect(contentCard).toBeInTheDocument();
  });
});
