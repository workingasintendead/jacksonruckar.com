import { render, screen } from '@testing-library/react';
import CoverCard from './CoverCard';
import covers from '../data/covers';

describe('CoverCard', () => {
  const { title, image, link } = covers[0];

  it('renders the title and view label', () => {
    render(<CoverCard title={title} image={image} link={link} />);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText('— view —')).toBeInTheDocument();
  });

  it('renders an anchor with correct href', () => {
    render(<CoverCard title={title} image={image} link={link} />);
    const anchor = screen.getByRole('link');
    expect(anchor).toHaveAttribute('href', link);
  });

  it('renders an image with correct alt text', () => {
    render(<CoverCard title={title} image={image} link={link} />);
    const img = screen.getByAltText(title);
    expect(img).toBeInTheDocument();
  });
});
