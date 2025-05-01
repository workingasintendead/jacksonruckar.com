import Link from 'next/link';
import Image from 'next/image';

const HomeLogo: React.FC = () => (
  <div className="max-w-[150px] sm:max-w-none">
    <div className="flex-shrink-0">
      <Link href="/">
        <Image
          src="/JRRuneLogo.png"
          alt="Jackson Ruckar Logo"
          width={100}
          height={100}
          className="object-contain transition-all duration-300 hover:opacity-85"
        />
      </Link>
    </div>
  </div>
);

export default HomeLogo;
