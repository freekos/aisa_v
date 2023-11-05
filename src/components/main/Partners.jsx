import Image from 'next/image';

export const Partners = () => {
  return (
    <div className='max-w-[1440px] px-10 mt-40 mx-auto pb-[200px] flex items-center justify-between'>
      <p className='font-black text-4xl'>Наши партнеры</p>
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
