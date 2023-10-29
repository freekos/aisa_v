import Image from 'next/image';
import Link from 'next/link';

const links = {
  socialMedia: [
    {
      src: '/social-media/facebook.svg',
      alt: 'facebook',
    },
    {
      src: '/social-media/x.svg',
      alt: 'x',
    },
    {
      src: '/social-media/instagram.svg',
      alt: 'instagram',
    },
    {
      src: '/social-media/youtube.svg',
      alt: 'youtube',
    },
    {
      src: '/social-media/tiktok.svg',
      alt: 'tiktok',
    },
  ],
  general: [
    {
      title: 'О фестивале',
      links: [
        {
          title: 'История',
          link: '/history',
        },
        {
          title: 'Новости',
          link: '/news',
        },
        {
          title: 'Контакты',
          link: '/',
        },
      ],
    },
    {
      title: 'Конкурсы',
      links: [
        {
          title: 'Жас Канат',
          link: '/',
        },
        {
          title: 'Жас Канат дети',
          link: '/',
        },
      ],
    },
    {
      title: 'Мерч',
      links: [
        {
          title: 'Одежда',
          link: '/',
        },
        {
          title: 'Сувениры',
          link: '/',
        },
      ],
    },
  ],
};

export const Footer = () => {
  return (
    <footer className='pt-20 relative'>
      <div className='absolute w-[50%] z-0 h-[50%] rounded-full bg-[#FE17BD] left-[-5%] top-[-10%] blur-[600px]' />
      <div className='absolute w-[50%] z-0 h-[50%] rounded-full bg-[#C87800] right-0 top-[-20%] blur-[600px]' />
      <div className='px-10 relative flex items-center justify-between'>
        <div>
          <Image src='/logo.png' width={120} height={120} alt='logo' />
          <div className='flex gap-10 mt-20 mb-11'>
            {links.socialMedia.map((link) => (
              <Image
                src={link.src}
                alt={link.alt}
                width={24}
                height={24}
                key={link.alt}
              />
            ))}
          </div>
          <div className='flex flex-col gap-4'>
            <Link href='/' className='text-sm text-gray-500 hover:underline'>
              Политика конфиденциальности
            </Link>
            <Link href='/' className='text-sm text-gray-500 hover:underline'>
              Условия использования
            </Link>
          </div>
        </div>
        <div className='flex gap-20 mr-28'>
          {links.general.map((item) => {
            return (
              <div className='flex flex-col gap-4' key={item.title}>
                <p className='font-bold'>{item.title}</p>
                {item.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.link}
                    className='text-sm hover:underline'
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <img src='/images/medeu.png' alt='medeu' className='w-screen' />
    </footer>
  );
};
