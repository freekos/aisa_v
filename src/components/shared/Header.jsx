'use client';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const links = [
  {
    href: '/history',
    name: 'О фестивале',
  },
  {
    href: '/',
    name: 'Конкурсы',
  },
  {
    href: '/news',
    name: 'Новости',
  },
  {
    href: '/',
    name: 'Контакты',
  },
];

export const Header = ({ color = 'white' }) => {
  const [nav, setNav] = useState(false);

  return (
    <header className='pt-10 pb-5 px-10 flex items-center justify-between '>
      <Link className='flex items-center' href='/'>
        <Image
          src='/logo.png'
          alt='logo'
          className='hidden lg:block'
          width={112}
          height={112}
        />
        <Image
          src='/logo.png'
          alt='logo'
          className='block lg:hidden'
          width={88}
          height={88}
        />
        <p
          className='ml-4 pl-4 font-bold border-l-2 hidden md:block'
          style={{ color: color, borderLeftColor: color }}
        >
          ИЮЛЬ, 29-31, 2024
        </p>
      </Link>
      <nav className='hidden lg:flex gap-8'>
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className='hover:underline font-bold'
            style={{ color: color }}
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <div className='flex items-center relative'>
        <button
          id='dropdownNavbarLink'
          datadropdowntoggle='dropdownNavbar'
          className='flex items-center justify-between py-2 pr-8 font-bold'
          style={{ color: color }}
        >
          Ру{' '}
          <svg
            className='w-2.5 h-2.5 ml-2.5'
            ariaHidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 10 6'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m1 1 4 4 4-4'
            />
          </svg>
        </button>
        <div
          id='dropdownNavbar'
          className=' relative z-40 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600'
        >
          <ul className='py-2 text-sm text-gray-700 dark:text-gray-400'>
            <li>
              <a
                href='#'
                className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                Ру
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                En
              </a>
            </li>
          </ul>
        </div>
        <button
          className='hidden lg:block px-6 py-4 bg-[#FF9E2C] hover:bg-[#FFBF75] rounded-2xl font-bold'
          style={{ color: color }}
        >
          Подать заявку на участие
        </button>
        <div
          onClick={() => setNav(!nav)}
          className='block lg:hidden cursor-pointer pr-4'
        >
          {nav ? (
            <FaTimes color={color} size={24} />
          ) : (
            <FaBars color={color} size={24} />
          )}
        </div>
        {nav && (
          <ul className='flex flex-col p-4 justify-center w-[280px] gap-4 absolute top-[40px] left-[-180px] bg-white rounded-lg'>
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className='hover:underline text-black'
              >
                {link.name}
              </Link>
            ))}
            <button className='p-4 bg-[#FF9E2C] hover:bg-[#FFBF75] rounded-2xl font-bold text-black'>
              Подать заявку на участие
            </button>
          </ul>
        )}
      </div>
    </header>
  );
};
