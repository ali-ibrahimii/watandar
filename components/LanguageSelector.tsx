"use client";
import { useLanguage } from "../src/app/context/LanguageContext";
import { Icon } from '@iconify/react';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative">
      <label htmlFor="language-select" className="cursor-pointer flex justify-center items-center rounded-full bg-blue-900 p-1 text-sm w-18">
      <Icon icon="mdi:web" height="24" />
        <select
          id="language-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value as "fa" | "en" | "ar")}
          className="rounded-full focus:outline-none text-white"
        >
          <option className="bg-black" value="fa">Fa</option>
          <option className="bg-black" value="ar">Ar</option>
          <option className="bg-black" value="en">En</option>
        </select>
      </label>
    </div>
  );
}
