import { Inter } from 'next/font/google';
import { Footer, Header } from '@/components';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Voice of Asia',
  description: 'Voice of Asia official website',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='stylesheet' href='https://use.typekit.net/zgt0eaw.css' />
      </head>
      <body
        className={`${inter.className} relative bg-gradient-to-b from-[#F6EADA] from-65% to-[#ff0dba2a]`}
      >
        <Header />
        {/* <div className='absolute w-[50%] z-0 h-[50%] rounded-full bg-[#FE17BD] right-0 top-[100vh] blur-[100%]' /> */}
        {/* <div className='absolute w-[40%] z-0 h-[35%] rounded-full bg-[#C87800CC] left-[20%] top-0 blur-[1200px]' /> */}
        {children}
        <Footer />
        {/* <div className='relative z-0'>
          
        </div> */}
      </body>
    </html>
  );
}
