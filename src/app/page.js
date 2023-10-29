import Image from 'next/image';
import { Competiotions, Hero, History, Merch, News } from '@/components/main';

export default function Home() {
  return (
    <main>
      <Hero />
      <News />
      <Competiotions />
      <Merch />
      <History />
    </main>
  );
}
