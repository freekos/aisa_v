import { Inter } from 'next/font/google';
import { Footer, Header } from './components';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Voice of Asia',
  description: 'Voice of Asia official website',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-white`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
