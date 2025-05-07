import { render, screen, within } from '@testing-library/react';
import ClientList from './ClientList';
import clients from '../data/clients';

describe('ClientList component', () => {
  it('renders all clients from the data file', () => {
    render(<ClientList clients={clients} />);
    clients.forEach((client) => {
      expect(screen.getByText(client)).toBeInTheDocument();
    });
  });

  it('splits the list into two approximately equal columns', () => {
    render(<ClientList clients={clients} />);
    clients.forEach((client) => {
      expect(screen.getByText(client)).toBeInTheDocument();
    });

    const columns = screen.getAllByRole('group');
    expect(columns.length).toBe(2);

    const [column1, column2] = columns;

    const column1Clients = within(column1).getAllByText(/.+/);
    const column2Clients = within(column2).getAllByText(/.+/);

    const totalClients = column1Clients.length + column2Clients.length;
    expect(totalClients).toBe(clients.length);

    const half = Math.ceil(clients.length / 2);
    expect(column1Clients.length).toBe(half);
    expect(column2Clients.length).toBe(clients.length - half);
  });

  it('renders correctly with an empty list', () => {
    render(<ClientList clients={[]} />);
    const columns = screen.getAllByRole('group');
    expect(columns.length).toBe(2);
    columns.forEach((column) => {
      const items = within(column).queryAllByText(/.+/);
      expect(items.length).toBe(0);
    });
  });
});
