import Image from 'next/image';
import { Header } from '../shared';

export const Hero = () => {
  return (
    <div className='min-w-screen h-screen bg-[url("/images/main.jpg")] bg-[lightgray]/50 bg-blend-screen bg-cover bg-center relative'>
      <Header />
      <div className='flex flex-col items-center justify-center w-full h-[calc(100%-112px)] gap-10'>
        <p className='font-black text-8xl flex gap-4'>
          <Image src='/logo.png' alt='logo' width={112} height={112} />
          Азия Дауысы
        </p>
        <p className='text-3xl'>Культуры мира в одном событии</p>
        <button className='px-6 py-4 bg-[#FF9E2C] max-w-[260px] hover:bg-[#FFBF75] rounded-2xl font-bold'>
          Подать заявку на участие
        </button>
      </div>
    </div>
  );
};
