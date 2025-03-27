"use client";
import Navbar from "../../components/Navbar";
import Menu from "../../components/Menu";
import LanguageSelector from "../../components/LanguageSelector";

export default function Home() {

  return (
    <div className="relative w-full h-screen bg-black text-white">
        <div className="absolute top-0 left-0 border w-full h-45 bg-amber-500"></div>
      {/* باکس محتوا */}
      <div className="absolute inset-0 flex flex-col items-center pt-5 justify-start text-center space-y-4">
        {/* لوگو */}
        <div>
          <img className="w-20" src="logo.png" alt="Watandar Logo" />
        </div>


        {/* عنوان رستوران */}
        <h1 className="text-[20px] font-bold">Restaurant Watandar</h1>
        
        <div>
          <LanguageSelector />
          <Navbar />
          <Menu />
        </div>
      </div>
    </div>
  );
}
