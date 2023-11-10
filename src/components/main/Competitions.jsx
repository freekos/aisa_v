import { ArrowIcon } from '@/icons';
import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
export const Competiotions = () => {
  return (
    <div className='max-w-[1440px] mt-14 md:mt-40 mx-auto px-4 md:px-10'>
      <p className='font-black mb-6 text-3xl md:text-6xl russo-one'>Конкурсы</p>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-10'>
        <Link
          href='https://contest.kz/'
          className='w-[100%] p-6 bg-[#DDD8F9] hover:bg-[#DDD8F988] cursor-pointer rounded-3xl'
        >
          {/* <img
            src='/images/jas-qanat.png'
            alt='Jas Qanat'
            className='w-[100%]'
          /> */}
          <div className='w-[100%] p-6 bg-white rounded-2xl relative'>
            <button className='absolute top-6 right-6 p-3 bg-[#DDD8F9] w-10 h-10 rounded-[50%]'>
              <ArrowIcon />
            </button>
            <p className='font-black text-2xl md:text-4xl mb-2'>Жас Канат</p>
            <p>
              Фестиваль &quot;Азия Дауысы&quot; поддерживает молодых талантов
              через конкурсы &quot;Жас Канат&quot; и &quot;Детский&quot;
            </p>
          </div>
        </Link>
        <Link
          href='https://contest.kz/'
          className='w-[100%] p-6 bg-[#FBC997] hover:bg-[#FF6B0033] cursor-pointer rounded-3xl'
        >
          {/* <img
            src='/images/junior.png'
            alt='Jas Qanat Junior'
            className='w-[100%]'
          /> */}
          <div className='w-[100%] p-6 bg-white rounded-2xl relative'>
            <button className='absolute top-6 right-6 p-3 bg-[#FBC997] w-10 h-10 rounded-[50%]'>
              <ArrowIcon />
            </button>
            <p className='font-black text-2xl md:text-4xl mb-2'>Жас Канат</p>
            <p>
              Фестиваль &quot;Азия Дауысы&quot; поддерживает молодых талантов
              через конкурсы &quot;Жас Канат&quot; и &quot;Детский&quot;
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};
