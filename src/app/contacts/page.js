import { Header } from '@/components';
export default function ContactsPage() {
  return (
    <main>
      <div className='max-w-[1440px] mx-auto px-4 mt-[128px] lg:mt-[200px]'>
        <p className='my-5 font-bold text-2xl md:text-5xl'>Контакты</p>
        <div className='flex flex-col md:flex-row gap-6 md:gap-16 mt-10'>
          <div>
            <p className='text-xl font-bold'>Телефон</p>
            <p className='text-lg'>+7 (777) 777 77 77</p>
          </div>
          <div>
            <p className='text-xl font-bold'>Почта</p>
            <p className='text-lg'>mail@mail.kz</p>
          </div>
        </div>
        <div className='mt-6 md:mt-12'>
          <p className='text-xl font-bold'>Адрес</p>
          <p className='text-lg'>
            ул. Сауран, город Астана, Республика Казахстан
          </p>
        </div>
      </div>
    </main>
  );
}
