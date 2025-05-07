import Image from 'next/image';
import ClientList from '../../components/ClientList';
import clients from '../../data/clients';

function AboutPage() {
  return (
    <div className="min-h-screen px-6 pt-[100px] pb-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-4">
        <Image
          src="/AboutImage.jpg"
          alt="Jackson"
          width={800}
          height={600}
          priority
          className="w-full h-auto object-cover rounded"
        />
        <div className="w-full text-center leading-relaxed">
          <p className="mb-4">
            Starting out as an action sports photographer, Jackson transitioned
            into shooting and touring with bands full time, before jumping into
            a stint as a US Army Public Affairs Specialist. He later spent over
            8 years with <em>USA Today</em> as a lead photographer and producer.
            Since then, Jackson has pivoted into a career as a skilled{' '}
            <strong>software engineer</strong>, blending technical expertise
            with creative vision across multiple disciplines.
          </p>
          <p className="mb-4">
            With Jackson’s career taking him from tour buses to foxholes and
            everything in between, he has honed the ability to capture his
            subject’s true personality, regardless of conditions. This
            adaptability has even influenced his gear choices, as he is{' '}
            <em>“cambidextrous”</em> with Nikon, Canon, Panasonic, DJI, and
            GoPro all represented in his camera bag, giving him the right tools
            for any job.
          </p>
          <p>
            Jackson is currently based in <strong>San Diego, CA</strong>.
            Available for assignment worldwide.
          </p>
        </div>
      </div>
      <hr className="max-w-4xl mx-auto my-8 border-gray-700" />
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-light mb-4">CLIENTS</h2>
        <ClientList clients={clients} />
      </div>
    </div>
  );
}

export default AboutPage;
