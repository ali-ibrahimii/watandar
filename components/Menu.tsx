import React from 'react'
import { menuItems } from '../src/app/data/menuItems'
import { useLanguage } from '@/app/context/LanguageContext'

const MenuCard = () => {
  const { language } = useLanguage();
  return (
    <div className="container mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-5 mt-5">
      {menuItems.map((item) => (
        <div key={item.id} 
          dir={language === 'fa' || language === 'ar' ? 'rtl' : 'ltr'}
          className="relative w-40 mt-15">
          {/* تصویر غذا */}
          <div className="absolute -top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-24 h-24">
            <img
              src={item.image}
              alt={item.name[language]}
              className="rounded-full w-full h-full bg-cover shadow-lg"
            />
          </div>

          {/* اطلاعات غذا */}
          <div className="w-full h-50 p-5 bg-[#11212d] rounded-xl pt-16 shadow-lg">
            <h1 className="text-[12px] font-bold text-center">
              {item.name[language]}
            </h1>
            <p className={`${language === "fa" || "ar" ? "text-start" : "text-end"} text-[14px]`}>
              {item.description[language]}
            </p>
            <p className={`absolute bottom-5 left-1/2 transform -translate-x-1/2 text-[12px] text-orange-300 font-bold text-center mt-2`}>
              {item.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default MenuCard