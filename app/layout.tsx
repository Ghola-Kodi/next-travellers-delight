import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Travellers Delight — Travel in Style',
  description: 'Boutique African travel experiences, crafted to feel like a five-star secret.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
