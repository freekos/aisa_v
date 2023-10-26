import { Header } from '../shared';

export const Hero = () => {
  return (
    <div className='min-w-screen min-h-screen bg-[url("/images/main.jpg")] bg-[lightgray]/50 bg-blend-screen bg-cover bg-center relative'>
      <Header />
      <div className='flex flex-col items-center mt-28 gap-10'>
        <p className='font-black text-8xl'>История</p>
        <p className='text-3xl max-w-5xl text-center'>
          Впервые «Голос Азии» состоялся в Алма-Ате в 1990 году.
          <br />
          Тогда в нем приняли участие представители из 15 стран мира.
        </p>
      </div>
    </div>
  );
};
