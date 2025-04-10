"use client";
// import Navbar from "../../components/Navbar";
import { useLanguage } from '@/app/context/LanguageContext'
import LanguageSelector from '../../components/LanguageSelector';
import MenuCard from "../../components/Menu";

export default function Home() {
  const {language} = useLanguage()
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="w-full h-screen fixed top-0 left-0">
        <img className="w-full h-full" src="background.jpg" alt="background" />  
      </div>
      <LanguageSelector />
      <MenuCard />
    </div>
  );
}
