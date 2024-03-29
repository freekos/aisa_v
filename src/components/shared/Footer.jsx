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
          link: '/contacts',
        },
      ],
    },
    {
      title: 'Конкурсы',
      links: [
        {
          title: 'Жас Канат',
          link: 'https://contest.kz/',
        },
        {
          title: 'Жас Канат дети',
          link: 'https://contest.kz/',
        },
      ],
    },
  ],
};

export const Footer = () => {
  return (
    <footer className='pt-20 relative'>
      {/* <div className='absolute w-[50%] z-0 h-[50%] rounded-full bg-[#fe17bd4d] left-[-5%] top-[-10%] blur-[600px]' />
      <div className='absolute w-[50%] z-0 h-[50%] rounded-full bg-[#C87800CC] right-0 top-[-20%] blur-[600px]' /> */}
      <div className='px-4 md:px-10 relative flex flex-col-reverse lg:flex-row lg:items-center justify-between'>
        <div>
          <Image src='/logo.png' width={120} height={120} alt='logo' />
          <div className='flex gap-10 mt-10 md:mt-20 mb-11'>
            {links.socialMedia.map((link) => (
              <Image
                src={link.src}
                alt={link.alt}
                width={32}
                height={32}
                key={link.alt}
              />
            ))}
          </div>
          <div className='flex flex-col gap-4'>
            <Link
              href='/privacy-policy'
              className='text-sm text-gray-500 hover:underline'
            >
              Политика конфиденциальности
            </Link>
            <p className='text-sm text-gray-500'>© 2023 The Voice of Asia</p>
          </div>
        </div>
        <div className='flex gap-10 md:gap-20 flex-col md:flex-row mr-0 md:mr-28 pb-10 lg:pb-0'>
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
      <img
        src='/images/medeu.png'
        alt='medeu'
        className='w-screen mt-[-60px]'
      />
    </footer>
  );
};
