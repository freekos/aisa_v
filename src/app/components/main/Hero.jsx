import { Header } from '../shared';

export const Hero = () => {
  return (
    <div className='min-w-screen min-h-screen bg-[url("/images/main.jpg")] bg-[lightgray]/50 bg-blend-screen bg-cover bg-center relative'>
      <Header />
      <div className='flex flex-col items-center mt-28 gap-10'>
        <p className='font-black text-8xl'>Азия Дауысы</p>
        <p className='text-3xl'>Культуры мира в одном событии</p>
        <button className='px-6 py-4 bg-[#FF9E2C] max-w-[260px] hover:bg-[#FFBF75] rounded-2xl font-bold'>
          Подать заявку на участие
        </button>
      </div>
    </div>
  );
};
