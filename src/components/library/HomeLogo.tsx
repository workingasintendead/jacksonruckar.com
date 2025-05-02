import Link from 'next/link';
import Image from 'next/image';

interface HomeLogoProps {
  size?: number;
}

const HomeLogo: React.FC<HomeLogoProps> = ({ size = 100 }) => (
  <div className="max-w-[150px] sm:max-w-none">
    <div className="flex-shrink-0">
      <Link href="/">
        <Image
          src="/JRRuneLogo.svg"
          alt="Jackson Ruckar Logo"
          width={size}
          height={size}
          className="object-contain transition-all duration-300 hover:opacity-85"
          priority
        />
      </Link>
    </div>
  </div>
);

export default HomeLogo;
