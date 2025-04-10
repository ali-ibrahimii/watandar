import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { menuItems } from '@/app/data/menuItems';
import { useLanguage } from '@/app/context/LanguageContext'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../src/app/style/style.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
   const {language} = useLanguage()
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        centeredSlides={true}
        loop
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

        {menuItems.map((items,index) => (
          <SwiperSlide key={index} className='flex flex-col justify-center items-center'>
            <h1 className='font-bold text-3xl'>{items.name[language]}</h1>
            <p>{items.description[language]}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
