type ClientListProps = {
  clients: string[];
};

function ClientList({ clients }: ClientListProps) {
  const half = Math.ceil(clients.length / 2);
  const column1 = clients.slice(0, half);
  const column2 = clients.slice(half);

  return (
    <div className="flex justify-center gap-4 text-lg">
      <div className="flex flex-col gap-1 w-32 text-right" role="group">
        {column1.map((client) => (
          <div key={client}>{client}</div>
        ))}
      </div>
      <div className="flex flex-col gap-1 w-32 text-left" role="group">
        {column2.map((client) => (
          <div key={client}>{client}</div>
        ))}
      </div>
    </div>
  );
}

export default ClientList;
