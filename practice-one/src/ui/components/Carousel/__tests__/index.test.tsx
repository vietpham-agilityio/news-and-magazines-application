import { render, cleanup, fireEvent, screen } from '@testing-library/react';

// component
import { Carousel } from '@/ui/components';

// mock data
import { listSlider } from '@/mocks';

let renderCarousel: any;

describe('Carousel component', () => {
  beforeEach(() => {
    renderCarousel = render(<Carousel listSlider={listSlider} />);
  });

  afterEach(() => {
    renderCarousel.unmount();
    cleanup();
  });

  it('should render Carousel macth snapshot', () => {
    expect(renderCarousel.asFragment()).toMatchSnapshot();
    expect(screen.getByAltText('Slide 0')).toBeInTheDocument();
  });

  it('Carousel should contain arrow left icon inside button first', () => {
    const iconArrowLeftElement = renderCarousel.getByTestId('arrow-left');

    fireEvent.click(iconArrowLeftElement);
    expect(iconArrowLeftElement).toBeInTheDocument();
    expect(screen.getByAltText('Slide 1')).toBeInTheDocument();
  });

  it('should navigate to the previous slide when the previous button is clicked', () => {
    const nextButton = renderCarousel.getByTestId('arrow-right');
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    const prevButton = renderCarousel.getByTestId('arrow-left');
    fireEvent.click(prevButton);

    expect(screen.getByAltText('Slide 2')).toBeInTheDocument();
  });

  it('should go to the last slide if the previous button is clicked on the first slide', () => {
    const prevButton = renderCarousel.getByTestId('arrow-left');
    fireEvent.click(prevButton);

    expect(screen.getByAltText('Slide 4')).toBeInTheDocument();
  });

  it('should go to the last slide if the next button is clicked four times', () => {
    const nextButton = renderCarousel.getByTestId('arrow-right');
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    expect(screen.getByAltText('Slide 1')).toBeInTheDocument();
  });

  it('Carousel should contain arrow right icon inside button second', () => {
    const iconArrowRightElement = renderCarousel.getByTestId('arrow-right');

    fireEvent.click(iconArrowRightElement);
    expect(iconArrowRightElement).toBeInTheDocument();
  });

  it('Carousel should contain ellipse icon', () => {
    const iconeEllipseElement = renderCarousel.getByTestId('ellipse-icon');

    fireEvent.click(iconeEllipseElement);
    expect(iconeEllipseElement).toBeInTheDocument();
  });
});
