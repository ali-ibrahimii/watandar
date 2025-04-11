import { useLanguage } from "@/app/context/LanguageContext";
import { menuItems, translations } from "@/app/data/menuItems";
import React from "react";

const Drink = () => {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col items-start px-10 relative">
      <div className="flex flex-col items-center">
        <h1 className="text-white font-bold text-2xl mt-5">{translations[language].drink}</h1>
      </div>
      {menuItems.map((item) => (
        <div key={item.id} className="flex justify-start mb-2 items-center  p-2 w-full h-15 bg-white rounded-full">
          <img className="w-15" src={item.image} alt="" />
          <div className="flex flex-col ml-2">
            <h1>{item.name[language]}</h1>
            <p>{item.description[language]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Drink;
