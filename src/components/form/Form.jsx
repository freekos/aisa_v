import { Header } from '../shared';

export const Form = () => {
  return (
    <div className='max-w-[1440px] mt-[128px] lg:mt-[200px] mx-auto px-4 md:px-10'>
      <p className='font-black text-4xl md:text-6xl mb-10 md:mb-20 russo-one'>
        Подача заявки Азия Дауысы 2024
      </p>
      <div>
        <p className='font-bold text-3xl mb-6'>Персональная информация</p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div>
            <label className='block text-sm mb-[2px]' htmlFor='surname'>
              Фамилия
            </label>
            <input
              className='appearance-none border rounded-2xl h-[52px] w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='surname'
              type='text'
              placeholder='Фамилия'
            />
          </div>
          <div>
            <label className='block text-sm mb-[2px]' htmlFor='name'>
              Имя
            </label>
            <input
              className='appearance-none border rounded-2xl h-[52px] w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='name'
              type='text'
              placeholder='Имя'
            />
          </div>
          <div>
            <label className='block text-sm mb-[2px]' htmlFor='midname'>
              Отчество
            </label>
            <input
              className='appearance-none border rounded-2xl h-[52px] w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='midname'
              type='text'
              placeholder='Отчество'
            />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-6'>
          <div>
            <label className='block text-sm mb-[2px]' htmlFor='country'>
              Страна
            </label>
            <input
              className='appearance-none border rounded-2xl h-[52px] w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='country'
              type='text'
              placeholder='Страна'
            />
          </div>
          <div>
            <label className='block text-sm mb-[2px]' htmlFor='city'>
              Город
            </label>
            <input
              className='appearance-none border rounded-2xl h-[52px] w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='city'
              type='text'
              placeholder='Город'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-6'>
          <div>
            <label className='block text-sm mb-[2px]' htmlFor='documentNumber'>
              Паспорт №
            </label>
            <input
              className='appearance-none border rounded-2xl h-[52px] w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='documentNumber'
              type='text'
              placeholder='Паспорт №'
            />
          </div>
          <div>
            <label className='block text-sm mb-[2px]' htmlFor='givenDate'>
              Дата выдачи:
            </label>
            <input
              className='appearance-none border rounded-2xl h-[52px] w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='givenDate'
              type='text'
              placeholder='ДД.ММ.ГГГГ'
            />
          </div>
        </div>
      </div>

      <div className='mt-16'>
        <p className='font-bold text-3xl mb-6'>Контактные данные</p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-6'>
          <div>
            <label className='block text-sm mb-[2px]' htmlFor='phoneNumber'>
              Номер телефона
            </label>
            <input
              className='appearance-none border rounded-2xl h-[52px] w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='phoneNumber'
              type='text'
              placeholder='Номер телефона'
            />
          </div>
          <div>
            <label className='block text-sm mb-[2px]' htmlFor='email'>
              Почта
            </label>
            <input
              className='appearance-none border rounded-2xl h-[52px] w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='text'
              placeholder='Почта'
            />
          </div>
        </div>
        <div className='grid grid-cols-1 gap-8 mt-6'>
          <div>
            <label className='block text-sm mb-[2px]' htmlFor='workPlace'>
              Место работы или учебы
            </label>
            <input
              className='appearance-none border rounded-2xl h-[52px] w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='workPlace'
              type='text'
              placeholder='Место работы или учебы'
            />
          </div>
        </div>
      </div>

      <div className='mt-16'>
        <p className='font-bold text-3xl mb-6'>Репертуар</p>
        <div className='grid grid-cols-1 gap-8 mt-6'>
          <div>
            <label className='block text-sm mb-[2px]' htmlFor='song'>
              Название песни (на языке оригинала)
            </label>
            <input
              className='appearance-none border rounded-2xl h-[52px] w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='song'
              type='text'
              placeholder='Название песни (на языке оригинала)'
            />
          </div>
        </div>
        <div className='grid grid-cols-1 gap-8 mt-6'>
          <div>
            <label className='block text-sm mb-[2px]' htmlFor='composer'>
              Композитор (Фамилия, Имя)
            </label>
            <input
              className='appearance-none border rounded-2xl h-[52px] w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='composer'
              type='text'
              placeholder='Композитор (Фамилия, Имя)'
            />
          </div>
        </div>
        <div className='grid grid-cols-1 gap-8 mt-6'>
          <div>
            <label className='block text-sm mb-[2px]' htmlFor='author'>
              Автор слов
            </label>
            <input
              className='appearance-none border rounded-2xl h-[52px] w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='author'
              type='text'
              placeholder='Автор слов'
            />
          </div>
        </div>
      </div>
      <button className='block px-6 py-4 bg-[#FF9E2C] hover:bg-[#FFBF75] rounded-2xl font-bold mt-10 mx-auto'>
        Подать заявку на участие
      </button>
    </div>
  );
};
