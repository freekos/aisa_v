import { Inter } from 'next/font/google';
import { Footer } from '@/components';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Voice of Asia',
  description: 'Voice of Asia official website',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-white relative`}>
        {/* <div className='absolute w-[50%] z-0 h-[50%] rounded-full bg-[#FE17BD] right-0 top-[100vh] blur-[100%]' /> */}
        <div className='absolute w-[40%] z-0 h-[35%] rounded-full bg-[#C87800] left-[20%] top-0 blur-[1200px]' />
        <div className='relative z-20]'>{children}</div>
        <div className='relative z-0'>
          <Footer />
        </div>
      </body>
    </html>
  );
}
