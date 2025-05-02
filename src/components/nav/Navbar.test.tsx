import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import { usePathname } from 'next/navigation';

describe('Navbar', () => {
  it('renders the Navbar component', () => {
    render(<Navbar />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders the HomeLogo with the correct src and default size (100px)', () => {
    render(<Navbar />);
    const img = screen.getByRole('img', { name: 'Jackson Ruckar Logo' });

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/JRRuneLogo.svg');
    expect(img).toHaveAttribute('width', '65');
    expect(img).toHaveAttribute('height', '65');
  });

  it('renders all navigation links', () => {
    render(<Navbar />);
    expect(screen.getByRole('link', { name: 'Work' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument();
  });

  it('renders the Instagram icon link', () => {
    render(<Navbar />);
    const igLink = screen.getByRole('link', {
      name: /instagram/i,
    });
    expect(igLink).toHaveAttribute(
      'href',
      'https://www.instagram.com/jacksonruckar'
    );
  });

  it('highlights the current active link', () => {
    (usePathname as jest.Mock).mockReturnValue('/contact');
    render(<Navbar />);
    const activeLink = screen.getByRole('link', { name: 'Contact' });
    expect(activeLink).toHaveClass('underline');
  });
});
