import { Newsreader, Outfit, Inconsolata } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const serif = Newsreader({ subsets: ['latin'], weight: ['400', '500'], style: ['normal', 'italic'], variable: '--font-serif', display: 'swap' });
const sans = Outfit({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-sans', display: 'swap' });
const mono = Inconsolata({ subsets: ['latin'], weight: ['500', '600'], variable: '--font-mono', display: 'swap' });

export const metadata = {
  title: {
    default: 'Sonder Homecare',
    template: '%s · Sonder Homecare',
  },
  description:
    'Sonder Homecare is a licensed 245D provider in Minnesota. Our caregivers work in clients’ own homes, family homes, and the community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
