import { render, screen } from '@testing-library/react';
import HomeLogo from './HomeLogo';

describe('HomeLogo', () => {
  it('renders the logo SVG', () => {
    render(<HomeLogo />);
    const svg = screen.getByRole('img', { name: 'Jackson Ruckar Logo' });

    expect(svg).toBeInTheDocument();
  });

  it('wraps the SVG in a link to the homepage', () => {
    render(<HomeLogo />);
    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('href', '/');
  });

  it('renders the logo SVG with the default size of 100px', () => {
    render(<HomeLogo />);
    const svg = screen.getByRole('img', { name: 'Jackson Ruckar Logo' });

    expect(svg).toHaveAttribute('width', '100');
    expect(svg).toHaveAttribute('height', '100');
  });

  it('renders the logo SVG with a custom size', () => {
    render(<HomeLogo size={65} />);
    const svg = screen.getByRole('img', { name: 'Jackson Ruckar Logo' });

    expect(svg).toHaveAttribute('width', '65');
    expect(svg).toHaveAttribute('height', '65');
  });
});
