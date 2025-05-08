import Image from 'next/image';
import miya2 from '../images/Miya - 2.jpg';

function Home() {
  return (
    <>
      <div className="relative h-screen w-full">
        <Image
          src={miya2}
          alt="Home Image"
          fill
          priority
          className="object-cover"
          sizes="200vh"
          placeholder="blur"
        />
      </div>
      <div className="p-8 flex items-center justify-center">
        <p>More content here...</p>
      </div>
    </>
  );
}

export default Home;
