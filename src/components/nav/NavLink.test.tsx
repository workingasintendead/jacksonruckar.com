import { render, screen } from '@testing-library/react';
import NavLink from './NavLink';
import { usePathname } from 'next/navigation';

describe('NavLink', () => {
  it('renders the link with the correct href and children', () => {
    (usePathname as jest.Mock).mockReturnValue('/about');

    render(<NavLink href="/about">About</NavLink>);

    const link = screen.getByRole('link', { name: 'About' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/about');
  });

  it('adds active classes when the pathname matches the href', () => {
    (usePathname as jest.Mock).mockReturnValue('/about');

    render(<NavLink href="/about">About</NavLink>);

    const link = screen.getByRole('link', { name: 'About' });
    expect(link).toHaveClass('underline');
    expect(link).toHaveClass('underline-offset-6');
    expect(link).toHaveClass('decoration-white');
  });

  it('does not add active classes when the pathname does not match the href', () => {
    (usePathname as jest.Mock).mockReturnValue('/contact');

    render(<NavLink href="/about">About</NavLink>);

    const link = screen.getByRole('link', { name: 'About' });
    expect(link).not.toHaveClass('underline');
    expect(link).not.toHaveClass('underline-offset-6');
    expect(link).not.toHaveClass('decoration-white');
  });
});
