import Image from 'next/image';
import { news } from '@/consts';
import { Header } from '../shared';

export const Article = () => {
  return (
    <div>
      <div className='min-w-full min-h-screen bg-[url("/history/2018.jpg")] bg-cover bg-center'>
        <div
          style={{
            position: 'absolute',
            height: '100vh',
            width: '100%',
            backgroundImage: 'linear-gradient(black, transparent)',
          }}
        >
          <Header />
        </div>
      </div>
      <div className='max-w-[1440px] mx-auto mb-36 px-10'>
        <p className='mt-2 text-[#6B7280] text-sm'>
          {' '}
          &quot;Азия Дауысы&quot;. Фото: Владимира Третьякова
        </p>
        <p className='max-w-[860px] mt-10 mb-6 font-bold text-[40px] leading-10'>
          Возвращение &quot;Азия Дауысы&quot;: как прошло открытие легендарного
          фестиваля в Алматы
        </p>
        <p className='text-[#6B7280] text-sm mb-8'>29 июля 2023</p>
        <p className='mb-2'>
          Легендарный международный фестиваль &quot;Азия Дауысы&quot;, который
          на протяжении долгих лет считался одним из известных среди стран не
          только средней Азии, но и всего Евразийского континента, вновь
          возродили спустя 19 лет.{' '}
        </p>
        <p className='mb-2'>
          Вновь возрожденный &quot;Азия Дауысы&quot; прошел на высокогорном
          катке &quot;Медео&quot;. Место выбрали не случайно, ведь когда-то, в
          далеком 1990 году, &quot;Голос Азии&quot; прозвучал именно здесь, над
          горами Алматы. &quot;Медео&quot; считается достоянием города Алматы,
          излюбленным местом горожан и гостей города. Таким образом, объединение
          двух значимых достояний страны подарило гостям фестиваля незабываемые
          эмоции.
        </p>
        <div className='min-w-full aspect-video bg-[url("/history/2019.jpg")] bg-cover bg-center mb-2' />
        <p className='mb-2'>
          Дождь, который, по словам организаторов, стал неким мистическим
          символом &quot;Азия Дауысы&quot;, также проявился в этот вечер. Ливень
          с грозой в начале фестиваля не только не помешал мероприятию, но и
          создал особенную атмосферу, воссоздавая дух тех лет, когда &quot;Азия
          Дауысы&quot; только начинал проводиться.{' '}
        </p>
      </div>
    </div>
  );
};
