import Image from 'next/image';
import { news } from '@/app/consts';
import { ArrowIcon } from '@/app/icons';

import './news.css';
import Link from 'next/link';

export const News = () => {
  return (
    <div className='mt-24'>
      <p className='px-10 font-black mb-6 text-6xl'>Новости</p>
      <div className='news overflow-x-auto flex gap-6 px-10'>
        {news.map((item) => {
          return (
            <Link href='/news/1' key={item.id} className='flex-shrink-0'>
              <Image
                src={item.image}
                width={384}
                height={256}
                alt={item.title}
                className='rounded-2xl h-64 object-cover'
              />
              <p className='my-5 w-[384px] whitespace-nowrap text-ellipsis overflow-hidden text-2xl font-bold'>
                {item.title}
              </p>
            </Link>
          );
        })}
      </div>
      <Link
        href='/news'
        className='ml-10 px-6 py-3 mt-10 bg-[#FF6B0033] hover:bg-[#FFBF75] max-w-[170px] rounded-2xl flex items-center gap-2'
      >
        Все новости <ArrowIcon />
      </Link>
    </div>
  );
};
