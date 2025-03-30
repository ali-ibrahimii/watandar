import React from "react";
import { menuItems } from "../src/app/data/menuItems";
import { useLanguage } from "@/app/context/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import Navbar from "./Navbar";

const MenuCard = () => {
  const { language } = useLanguage();
  return (
    <div className="w-screen h-screen overflow-hidden relative flex flex-col">
  {/* پس‌زمینه ثابت */}
  <div className="fixed inset-0 z-0" 
    style={{ 
      backgroundImage: "url('menu-bg.jpg')", 
      backgroundAttachment: "fixed", 
      backgroundSize: "cover", 
      backgroundPosition: "center", 
      backgroundRepeat: "no-repeat" 
    }}
  ></div>

  {/* نوار زبان و ناوبری */}
  <div className="absolute z-50 text-white flex justify-center items-center flex-col top-0 w-full space-y-4">
    <LanguageSelector />
    <Navbar />
  </div>

  {/* اسکرول افقی برای منو */}
  <div className="flex flex-row overflow-x-auto scroll-smooth space-x-4 px-5 z-10 w-screen h-full justify-center snap-x snap-mandatory">
    {/* فاصله در دو طرف برای متعادل کردن اسکرول */}
    <div className="flex-shrink-0 w-[10vw]"></div>

    {menuItems.map((item) => (
      <div 
        key={item.id} 
        dir={language === "fa" || language === "ar" ? "rtl" : "ltr"} 
        className="flex-shrink-0 relative w-[80vw] max-w-xs snap-center mt-40"
      >
        {/* تصویر غذا */}
        <div className="absolute -top-[60px] left-[95px] w-32 h-32 mx-auto">
          <img
            src={item.image}
            alt={item.name[language]}
            className="rounded-full w-full h-full bg-cover shadow-lg"
          />
        </div>

        {/* اطلاعات غذا */}
        <div className="w-full p-5 bg-white/20 text-white rounded-t-[40px] backdrop-blur-20 border border-white/30 rounded-b-xl pt-16 shadow-lg text-center">
          <h1 className="text-[14px] font-bold">{item.name[language]}</h1>
          <p className="text-[12px] text-white">
            {item.description[language]}
          </p>
          <p className="text-[14px] text-orange-300 font-bold mt-2">
            {item.price}
          </p>
        </div>
      </div>
    ))}

    {/* فاصله در دو طرف برای متعادل کردن اسکرول */}
    <div className="flex-shrink-0 w-[10vw]"></div>
  </div>
</div>


  );
};

export default MenuCard;
