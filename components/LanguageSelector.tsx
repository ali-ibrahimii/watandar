"use client";
import { useLanguage } from "../src/app/context/LanguageContext";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 p-2">
      <label htmlFor="language-select" className="text-sm font-semibold">
        🌍 زبان:
      </label>
      <select
        id="language-select"
        value={language}
        onChange={(e) => setLanguage(e.target.value as "fa" | "en" | "ar")}
        className="p-2 border rounded-md bg-gray-100 text-black"
      >
        <option value="fa">🇮🇷 فارسی</option>
        <option value="en">🇺🇸 English</option>
        <option value="ar">🇸🇦 العربية</option>
      </select>
    </div>
  );
}
