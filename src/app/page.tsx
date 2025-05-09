'use client';

import Masonry from 'react-masonry-css';
import CoverCard from '../components/CoverCard';
import covers from '../data/covers';

const breakpointColumns = {
  default: 3,
  1024: 3,
  768: 2,
  500: 1,
};

export default function Home() {
  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="flex"
      columnClassName="flex flex-col"
    >
      {covers.map(({ title, image, link }) => (
        <CoverCard key={title} title={title} image={image} link={link} />
      ))}
    </Masonry>
  );
}
