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
});
