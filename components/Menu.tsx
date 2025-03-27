import React from 'react'
import { menuItems } from '../src/app/data/menuItems'
import { useLanguage } from '@/app/context/LanguageContext'

const MenuCard = () => {
  const { language } = useLanguage();
  return (
    <div className="container mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 px-4 mt-5">
      {menuItems.map((item) => (
        <div key={item.id} className="relative w-36 mt-18">
          {/* تصویر غذا */}
          <div className="absolute -top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-24 h-24">
            <img
              src={item.image}
              alt={item.name[language]}
              className="rounded-full w-full h-full bg-cover shadow-lg"
            />
          </div>

          {/* اطلاعات غذا */}
          <div className="w-full h-50 p-5 rounded-xl pt-16 shadow-lg">
            <h3 className="text-[15px] font-semibold text-center">
              {item.name[language]}
            </h3>
            <p className={`text-gray-200 text-[14px] text-end`}>
              {item.description[language]}
            </p>
            <p className="text-[12px] text-orange-300 font-bold text-center mt-2">
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