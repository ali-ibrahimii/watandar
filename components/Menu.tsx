import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { menuItems } from "@/app/data/menuItems";
import { useLanguage } from "@/app/context/LanguageContext";
import "swiper/css";
import "swiper/css/pagination";
import "../src/app/style/style.css";
import { Pagination } from "swiper/modules";

export default function App() {
  const { language } = useLanguage();
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        centeredSlides={true}
        loop
        modules={[Pagination]}
        className="mySwiper mt-10"
      >
        {menuItems.map((items, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <img
              src={items.image}
              alt={items.name[language]}
              className="swiper-slide-img"
            />

            {/* Content */}
            <h1 className="text-white font-bold text-center mt-16">
              {items.name[language]}
            </h1>
            <p className="text-sm text-gray-300 text-center mt-1">
              {items.description[language]}
            </p>
            <p className="text-orange-400 font-bold text-center mt-2">
              {items.price} T
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
