import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

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

    expect(typoElement).toBeInTheDocument();
  });

  it('Typography should be rendered with contain the children passed', () => {
    const typoElement = screen.getByText('This typography');

    expect(typoElement).toBeInTheDocument();
  });
});
