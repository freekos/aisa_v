import Image from 'next/image';

export const Partners = () => {
  return (
    <div className='max-w-[1440px] mb-24 mt-24 md:mt-40 mx-auto px-4 md:px-10'>
      <p className='font-black mb-8 text-3xl md:text-6xl russo-one'>
        Наши партнеры
      </p>
      <div className='flex md:items-center gap-10 justify-between flex-col md:flex-row md:justify-start md:gap-24'>
        <Image width={224} height={96} src='/partners/tan.png' alt='tan' />
        <Image
          width={224}
          height={96}
          src='/partners/opengate.png'
          alt='opengate'
        />
        <Image
          width={224}
          height={96}
          src='/partners/forbes.svg'
          alt='forbes'
        />
      </div>
    </div>
  );
};
