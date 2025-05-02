import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/nav/Navbar';

export const metadata: Metadata = {
  title: 'Jackson Ruckar',
  description: 'Photographer, Developer, and Explorer.',
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body className={`antialiased`}>
        <Navbar />
        <main className="min-h-[calc(100vh-85px)]">{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
