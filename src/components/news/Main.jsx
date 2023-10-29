import Image from 'next/image';
import { news } from '@/consts';
import { Header } from '../shared';
import Link from 'next/link';

export const Main = () => {
  return (
    <div>
      <Header />
      <div className='max-w-[1440px] mt-28 mx-auto px-10'>
        <p className='font-black text-8xl mb-20'>Новости</p>
        <div className='w-full max-h-[568px] aspect-video rounded-3xl bg-[url("/history/2018.jpg")] bg-cover bg-center' />
        <p className='my-5 font-bold text-5xl'>
          Азия Дауысы 2023: Главное событие этого лета
        </p>
      </div>
      <div className='max-w-[1440px] mx-auto mt-16 px-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 gap-y-10'>
        {news.map((item) => {
          return (
            <Link
              href='/news/1'
              key={item.id}
              className='flex-shrink-0 cursor-pointer'
            >
              <img
                src={item.image}
                alt={item.title}
                className='rounded-2xl w-full h-64 object-cover'
              />
              <p className='my-5 w-full whitespace-nowrap text-ellipsis overflow-hidden text-2xl font-bold'>
                {item.title}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
