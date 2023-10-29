import Image from 'next/image';
import Link from 'next/link';

const links = [
  {
    href: '/',
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

export const Header = () => {
  return (
    <header className='px-10 flex items-center justify-between'>
      <Link className='flex items-center' href='/'>
        <Image src='/logo.png' alt='logo' width={112} height={112} />
        <p className='ml-8'>ИЮЛЬ, 29-31, 2024</p>
      </Link>
      <nav className='flex gap-8'>
        {links.map((link) => (
          <Link key={link.name} href={link.href} className='hover:underline'>
            {link.name}
          </Link>
        ))}
      </nav>
      <div className='flex items-center'>
        <button className='px-6 py-4 bg-[#FF9E2C] hover:bg-[#FFBF75] rounded-2xl font-bold'>
          Подать заявку на участие
        </button>
      </div>
    </header>
  );
};
