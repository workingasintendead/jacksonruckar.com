import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`transition duration-200 after-line ${isActive ? 'underline underline-offset-6 decoration-white' : ''}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
