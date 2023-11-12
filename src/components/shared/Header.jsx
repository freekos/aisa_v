'use client';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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
    href: '/contacts',
    name: 'Контакты',
  },
];

export const Header = ({ color = 'black' }) => {
  const [nav, setNav] = useState(false);
  const router = useRouter();

  const handleNavigate = () => router.push('form');

  return (
    <header className='pt-4 pb-5 px-4 md:px-10 flex items-center justify-between fixed w-full z-50 top-0 left-0 bg-[#F6EADA]'>
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
          width={72}
          height={72}
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
            aria-hidden='true'
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
        <button
          className='hidden lg:block px-6 py-4 bg-[#FF9E2C] hover:bg-[#FFBF75] rounded-2xl font-bold'
          style={{ color: color }}
          onClick={handleNavigate}
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
            <button
              className='p-4 bg-[#FF9E2C] hover:bg-[#FFBF75] rounded-2xl font-bold text-black'
              onClick={handleNavigate}
            >
              Подать заявку на участие
            </button>
          </ul>
        )}
      </div>
    </header>
  );
};
