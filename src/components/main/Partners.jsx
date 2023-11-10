import Image from 'next/image';

export const Partners = () => {
  return (
    <div className='max-w-[1440px] px-4 md:px-10 mt-24 md:mt-40 mx-auto pb-[72px] md:pb-[200px] flex md:items-center gap-10 justify-between flex-col md:flex-row'>
      <p className='font-black text-3xl md:text-4xl'>Наши партнеры</p>
      <Image width={176} height={64} src='/partners/tan.png' alt='tan' />
      <Image
        width={176}
        height={64}
        src='/partners/opengate.png'
        alt='opengate'
      />
      <Image width={176} height={64} src='/partners/forbes.svg' alt='forbes' />
    </div>
  );
};
