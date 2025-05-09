import Image, { StaticImageData } from 'next/image';

type CoverCardProps = {
  title: string;
  image: StaticImageData;
  link: string;
};

function CoverCard({ title, image, link }: CoverCardProps) {
  return (
    <a href={link} className="relative group block overflow-hidden">
      <Image
        src={image}
        alt={title}
        placeholder="blur"
        className="w-full h-auto"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/80 transition duration-500 flex flex-col items-center justify-center z-10">
        <span className="text-white text-4xl opacity-0 group-hover:opacity-100 transition duration-500">
          {title}
        </span>
        <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition duration-500 mt-5">
          — view —
        </span>
      </div>
    </a>
  );
}

export default CoverCard;
