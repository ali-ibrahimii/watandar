"use client";
import Navbar from "../../components/Navbar";
import Menu from "../../components/Menu";
import LanguageSelector from "../../components/LanguageSelector";
import SlideButton from "../../components/SlideButton"

export default function Home() {

  return (
    <div className="relative w-full h-screen bg-[#06141b] text-white">
      {/* باکس محتوا */}
      <div className="absolute inset-0 flex flex-col items-center text-center space-y-2 bg-amber-700">
        {/* لوگو */}
        <div>
          <img className="w-full h-screen" src="bg.jpg" alt="Watandar Logo" />
        </div>
        {/* عنوان رستوران */}
        <h1 className="text-[20px] font-bold">Restaurant Watandar</h1>
        {/* کامپوننت */}
        <div>
          <LanguageSelector />
          <SlideButton />
          <Navbar />
          <Menu />
        </div>
      </div>
    </div>
  );
}
