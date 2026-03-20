import type { Metadata } from 'next';
import { Archivo } from 'next/font/google';
import './globals.css';

const archivo = Archivo({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });

export const metadata: Metadata = {
  title: 'PulseForce — Premium Massage Gun',
  description: 'Premium percussion massage gun landing page with scroll-driven frames.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${archivo.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
