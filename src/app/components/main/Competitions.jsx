import { ArrowIcon } from '@/app/icons';

/* eslint-disable @next/next/no-img-element */
export const Competiotions = () => {
  return (
    <div className='max-w-[1440px] mt-40 mx-auto px-10'>
      <p className='font-black mb-6 text-6xl'>Конкурсы</p>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-10'>
        <div className='w-[100%] p-6 bg-[#DDD8F9] rounded-3xl'>
          <img
            src='/images/jas-qanat.png'
            alt='Jas Qanat'
            className='w-[100%]'
          />
          <div className='w-[100%] mt-8 p-6 bg-white rounded-2xl relative'>
            <button className='absolute top-6 right-6 p-3 bg-[#DDD8F9] w-10 h-10 rounded-[50%]'>
              <ArrowIcon />
            </button>
            <p className='font-black text-4xl mb-2'>Жас Канат</p>
            <p>
              Фестиваль &quot;Азия Дауысы&quot; поддерживает молодых талантов
              через конкурсы &quot;Жас Канат&quot; и &quot;Детский&quot;
            </p>
          </div>
        </div>
        <div className='w-[100%] p-6 bg-[#FBC997] rounded-3xl'>
          <img
            src='/images/junior.png'
            alt='Jas Qanat Junior'
            className='w-[100%]'
          />
          <div className='w-[100%] mt-8 p-6 bg-white rounded-2xl relative'>
            <button className='absolute top-6 right-6 p-3 bg-[#FBC997] w-10 h-10 rounded-[50%]'>
              <ArrowIcon />
            </button>
            <p className='font-black text-4xl mb-2'>Жас Канат</p>
            <p>
              Фестиваль &quot;Азия Дауысы&quot; поддерживает молодых талантов
              через конкурсы &quot;Жас Канат&quot; и &quot;Детский&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
