/* eslint-disable @next/next/no-img-element */
export const Merch = () => {
  return (
    <div className='max-w-[1440px] mt-24 md:mt-40 mx-auto px-4 md:px-10'>
      <p className='font-black mb-6 text-3xl md:text-6xl russo-one'>Мерч</p>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-10'>
        <div className='w-[100%] aspect-video bg-[url("/images/clothes.png")] rounded-3xl px-4 md:px-8 py-5 md:py-9'>
          <div className='bg-white px-6 py-4 rounded-3xl text-[#583EEC] inline-block font-black text-xl md:text-3xl'>
            Одежда
          </div>
        </div>
        <div className='w-[100%] aspect-video bg-[url("/images/accessories.png")] rounded-3xl px-4 md:px-8 py-5 md:py-9'>
          <div className='bg-white px-6 py-4 rounded-3xl text-[#583EEC] inline-block font-black text-xl md:text-3xl'>
            Акссесуары
          </div>
        </div>
      </div>
    </div>
  );
};
