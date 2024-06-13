import { render, screen, cleanup } from '@testing-library/react';

// component
import { Typography } from '@/ui/components';

let renderTypography: any;

describe('Typography component', () => {
  beforeEach(() => {
    renderTypography = render(
      <Typography tag="h1">This typography</Typography>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('Typography should render Typography macth snapshot', () => {
    expect(renderTypography.asFragment()).toMatchSnapshot();
  });

  it('Typography should be rendered with role heading', () => {
    const typoElement = screen.getByRole('heading');

    expect(typoElement).toHaveAttribute('aria-level', '1');
    expect(typoElement).toBeInTheDocument();
  });

  it('Typography with an H6 tag should have aria-level 6', () => {
    render(<Typography tag="h6">H6 Heading</Typography>);
    const typoElement = screen.getByText('H6 Heading');

    expect(typoElement).toHaveAttribute('aria-level', '6');
    expect(typoElement).toBeInTheDocument();
  });


  it('Typography with an p tag should have aria-level 7', () => {
    render(<Typography tag="p">Some content</Typography>);
    const typoElement = screen.getByText('Some content');

    expect(typoElement).toHaveAttribute('aria-level', '7');
    expect(typoElement).toBeInTheDocument();
  });

  it('Typography should be rendered with contain the children passed', () => {
    const typoElement = screen.getByText('This typography');

    expect(typoElement).toBeInTheDocument();
  });
});
