import { render, screen } from '@testing-library/react';
import HomeLogo from './HomeLogo';

describe('HomeLogo', () => {
  it('renders the logo image with alt text', () => {
    render(<HomeLogo />);
    const image = screen.getByAltText('Jackson Ruckar Logo');

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/JRRuneLogo.svg');
    expect(image).toHaveAttribute('alt', 'Jackson Ruckar Logo');
  });

  it('wraps the image in a link to the homepage', () => {
    render(<HomeLogo />);
    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('href', '/');
  });

  it('renders the logo image with the default size of 100px', () => {
    render(<HomeLogo />);
    const image = screen.getByAltText('Jackson Ruckar Logo');

    expect(image).toHaveAttribute('width', '100');
    expect(image).toHaveAttribute('height', '100');
  });

  it('renders the logo image with a custom size', () => {
    render(<HomeLogo size={65} />);
    const image = screen.getByAltText('Jackson Ruckar Logo');

    expect(image).toHaveAttribute('width', '65');
    expect(image).toHaveAttribute('height', '65');
  });
});
