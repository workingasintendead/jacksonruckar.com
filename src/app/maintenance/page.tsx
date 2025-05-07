import IgIcon from '../../components/library/IgIcon';

function Maintenance() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">🚧 Under Maintenance 🚧</h1>
      <p className="mt-4 mb-4 text-lg">We&apos;ll be back shortly!</p>
      <IgIcon size={50} />
    </main>
  );
}

export default Maintenance;
