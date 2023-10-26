import { ArrowIcon } from '@/app/icons';
import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
export const History = () => {
  return (
    <div className='max-w-[1440px] mt-40 mx-auto px-10'>
      <p className='font-black mb-6 text-6xl'>Азия Дауысы: Сквозь года</p>
      <div className='w-[100%] max-h-[640px] aspect-video bg-[url("/history/2022.jpg")] bg-cover bg-center rounded-3xl overflow-hidden'>
        <div className='bg-[#1B19194D] w-[100%] h-[100%] flex justify-center items-center'>
          <p className='bg-white px-6 py-4 rounded-3xl text-[#583EEC] inline-block font-black text-3xl'>
            2024
          </p>
        </div>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-6'>
        <div className='w-[100%] aspect-video bg-[url("/history/2021.jpg")] bg-cover bg-center rounded-3xl overflow-hidden'>
          <div className='bg-[#1B19194D] w-[100%] h-[100%] flex justify-center items-center'>
            <p className='bg-white px-6 py-4 rounded-3xl text-[#583EEC] inline-block font-black text-3xl'>
              2023
            </p>
          </div>
        </div>
        <div className='w-[100%] aspect-video bg-[url("/history/2020.jpg")] bg-cover bg-center rounded-3xl overflow-hidden'>
          <div className='bg-[#1B19194D] w-[100%] h-[100%] flex justify-center items-center'>
            <p className='bg-white px-6 py-4 rounded-3xl text-[#583EEC] inline-block font-black text-3xl'>
              2022
            </p>
          </div>
        </div>
        <div className='w-[100%] aspect-video bg-[url("/history/2019.jpg")] bg-cover bg-center rounded-3xl overflow-hidden'>
          <div className='bg-[#1B19194D] w-[100%] h-[100%] flex justify-center items-center'>
            <p className='bg-white px-6 py-4 rounded-3xl text-[#583EEC] inline-block font-black text-3xl'>
              2021
            </p>
          </div>
        </div>
        <div className='w-[100%] aspect-video bg-[url("/history/2018.jpg")] bg-cover bg-center rounded-3xl overflow-hidden'>
          <div className='bg-[#1B19194D] w-[100%] h-[100%] flex justify-center items-center'>
            <p className='bg-white px-6 py-4 rounded-3xl text-[#583EEC] inline-block font-black text-3xl'>
              2020
            </p>
          </div>
        </div>
        <div className='w-[100%] aspect-video bg-[url("/history/2017.jpg")] bg-cover bg-center rounded-3xl overflow-hidden'>
          <div className='bg-[#1B19194D] w-[100%] h-[100%] flex justify-center items-center'>
            <p className='bg-white px-6 py-4 rounded-3xl text-[#583EEC] inline-block font-black text-3xl'>
              2020
            </p>
          </div>
        </div>
        <div className='w-[100%] aspect-video bg-[url("/history/2022.jpg")] bg-cover bg-center rounded-3xl overflow-hidden'>
          <div className='bg-[#1B19194D] w-[100%] h-[100%] flex justify-center items-center'>
            <p className='bg-white px-6 py-4 rounded-3xl text-[#583EEC] inline-block font-black text-3xl'>
              2020
            </p>
          </div>
        </div>
      </div>

      <Link
        href='/history'
        className='px-6 py-3 mt-10 bg-[#FF6B0033] hover:bg-[#FFBF75] max-w-[260px] rounded-2xl flex items-center gap-2'
      >
        История Азия Дауысы <ArrowIcon />
      </Link>
    </div>
  );
};
