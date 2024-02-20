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
  const [isDropdownVisible, setDropdownVisible] = useState(null);
  const [language, setLanguage] = useState('ru');

  const handleMouseEnter = (idx) => {
    setDropdownVisible(idx);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(null);
  };

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
      </Link>
      <nav className='hidden lg:flex gap-8'>
        <p
          className='hover:underline font-bold cursor-pointer relative'
          style={{ color: color }}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          О фестивале
          {isDropdownVisible === 1 && (
            <div className='hidden lg:flex absolute top-[24px] left-[-8px] pt-[10px]'>
              <div className='flex flex-col gap-2 w-[220px] p-4 rounded-lg bg-white'>
                <Link
                  href='/history'
                  className='hover:underline font-bold'
                  style={{ color: color }}
                >
                  Архивы
                </Link>
                <Link
                  href='/history'
                  className='hover:underline font-bold'
                  style={{ color: color }}
                >
                  2023 (Возраждение)
                </Link>
              </div>
            </div>
          )}
        </p>
        <Link
          href='/news'
          className='hover:underline font-bold'
          style={{ color: color }}
        >
          Новости
        </Link>
        <Link
          href='/contacts'
          className='hover:underline font-bold'
          style={{ color: color }}
        >
          Контакты
        </Link>
        <p
          className='hover:underline font-bold cursor-pointer relative'
          style={{ color: color }}
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={handleMouseLeave}
        >
          2024
          {isDropdownVisible === 4 && (
            <div className='hidden lg:flex absolute top-[24px] left-[-16px] pt-[10px]'>
              <div className='flex flex-col gap-2 w-[240px] p-4 rounded-lg bg-white'>
                <Link
                  href='/'
                  className='hover:underline font-bold'
                  style={{ color: color }}
                >
                  Правила
                </Link>
                <Link
                  href='/'
                  className='hover:underline font-bold'
                  style={{ color: color }}
                >
                  Кто может учавствовать
                </Link>
                <Link
                  href='/'
                  className='hover:underline font-bold'
                  style={{ color: color }}
                >
                  Мероприятие
                </Link>
              </div>
            </div>
          )}
        </p>
      </nav>
      <div className='flex items-center relative'>
        <p
          className='hover:underline font-bold cursor-pointer relative flex items-center justify-between py-2 pr-8'
          style={{ color: color }}
          onMouseEnter={() => handleMouseEnter(5)}
          onMouseLeave={handleMouseLeave}
        >
          {language === 'ru' ? 'Ру' : 'En'}{' '}
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
          {isDropdownVisible === 5 && (
            <div className='hidden lg:flex absolute top-[24px] left-[-16px] pt-[10px]'>
              <div className='flex flex-col gap-2 w-[64px] p-4 rounded-lg bg-white'>
                <p
                  onClick={() => setLanguage('ru')}
                  className='hover:underline font-bold'
                >
                  Ру
                </p>
                <p
                  onClick={() => setLanguage('en')}
                  href='/'
                  className='hover:underline font-bold'
                >
                  En
                </p>
              </div>
            </div>
          )}
        </p>
        {/* <button
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
        </button> */}
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
            <Link
              href='/history'
              className='hover:underline text-black'
              style={{ color: color }}
            >
              Архивы
            </Link>
            <Link
              href='/history'
              className='hover:underline text-black'
              style={{ color: color }}
            >
              2023 (Возраждение)
            </Link>
            <Link
              href='/news'
              className='hover:underline text-black'
              style={{ color: color }}
            >
              Новости
            </Link>
            <Link
              href='/contacts'
              className='hover:underline text-black'
              style={{ color: color }}
            >
              Контакты
            </Link>
            <Link
              href='/'
              className='hover:underline text-black'
              style={{ color: color }}
            >
              Правила
            </Link>
            <Link
              href='/'
              className='hover:underline text-black'
              style={{ color: color }}
            >
              Кто может учавствовать
            </Link>
            <Link
              href='/'
              className='hover:underline text-black'
              style={{ color: color }}
            >
              Мероприятие
            </Link>
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
