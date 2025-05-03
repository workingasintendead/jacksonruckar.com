import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

interface IgIconProps {
  size?: number;
}

const IgIcon: React.FC<IgIconProps> = ({ size = 24 }) => (
  <Link
    href="https://www.instagram.com/jacksonruckar"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-pink-500 transition-colors duration-500"
    aria-label="Jackson Ruckar's Instagram"
  >
    <FaInstagram size={size} />
  </Link>
);

export default IgIcon;
