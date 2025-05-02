import Image from 'next/image';

function Home() {
  return (
    <>
      <div className="relative h-screen w-full">
        <Image
          src="/Miya - 2.jpg"
          alt="Home Image"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="p-8 flex items-center justify-center">
        <p>More content here...</p>
      </div>
    </>
  );
}

export default Home;
