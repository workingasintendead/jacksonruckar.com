'use client';

import HomeLogo from '../library/HomeLogo';
import IgIcon from '../library/IgIcon';
import NavLink from './NavLink';

const Navbar: React.FC = () => {
  return (
    <nav className="h-[85px] fixed top-0 left-0 right-0 z-50 flex items-center px-[5%]">
      <HomeLogo size={65} />
      <div className="ml-auto space-x-4 flex items-center">
        <NavLink href="/">Work</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
        <IgIcon />
      </div>
    </nav>
  );
};

export default Navbar;
