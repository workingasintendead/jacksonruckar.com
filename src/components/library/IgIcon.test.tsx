import { render, screen } from '@testing-library/react';
import IgIcon from './IgIcon';

describe('IgIcon', () => {
  it('renders an Instagram icon link to the correct URL', () => {
    render(<IgIcon />);
    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      'href',
      'https://www.instagram.com/jacksonruckar'
    );
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('contains the Instagram icon', () => {
    const { container } = render(<IgIcon />);
    const svg = container.querySelector('svg');

    expect(svg).toBeInTheDocument();
  });

  it('renders the Instagram icon with the default size of 24px', () => {
    const { container } = render(<IgIcon />);
    const svg = container.querySelector('svg');

    expect(svg).toHaveAttribute('width', '24');
    expect(svg).toHaveAttribute('height', '24');
  });

  it('renders the Instagram icon with a custom size', () => {
    const { container } = render(<IgIcon size={65} />);
    const svg = container.querySelector('svg');

    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('width', '65');
    expect(svg).toHaveAttribute('height', '65');
  });
});
