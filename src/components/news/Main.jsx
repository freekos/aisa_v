import Image from 'next/image';
import { news } from '@/consts';
import { Header } from '../shared';
import Link from 'next/link';

export const Main = () => {
  return (
    <div>
      {/* <Header color='black' /> */}
      <div className='max-w-[1440px] mx-auto px-4 md:px-10  mt-[128px] lg:mt-[200px]'>
        <p className='font-black text-4xl md:text-8xl mb-10 md:mb-20 russo-one'>
          Новости
        </p>
        <div className='w-full box-border max-h-[568px] aspect-video rounded-3xl bg-[url("/history/2018.jpg")] bg-cover bg-center' />
        <p className='my-5 font-bold text-2xl md:text-5xl'>
          Азия Дауысы 2023: Главное событие этого лета
        </p>
      </div>
      <div className='max-w-[1440px] mx-auto mt-16 px-4 md:px-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 gap-y-10'>
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
                className='rounded-2xl w-full h-64 object-cover box-border'
              />
              <p className='my-5 box-border whitespace-nowrap text-ellipsis overflow-hidden text-lg md:text-2xl font-bold'>
                {item.title}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
