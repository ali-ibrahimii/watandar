"use client";


import Drink from '../../components/Drink';
import Food from '../../components/Food';
import LanguageSelector from '../../components/LanguageSelector';
import MenuCard from "../../components/Menu";
import Navbar from '../../components/Navbar';
import Salad from '../../components/Salad';

export default function Home() {
  return (
    <div className="w-full h-screen relative">
      <div className="w-full h-screen fixed top-0 left-0">
        <img className="w-full h-full" src="background.jpg" alt="background" />  
      </div>
      <div className='w-full absolute top-0 left-0 flex flex-col justify-center items-center'>
        <img className='w-20' src="logo.png" alt="logo" />
        <h1 className='text-white font-bold text-2xl'>Watandar Restaurant</h1>
        <Navbar />
      </div>
      <div className='z-[500]'>
        <LanguageSelector />
      </div>
      <div className='mt-36'>
        <MenuCard />
      </div>
      <Food />
      <Drink />
      <Salad />
    </div>
  );
}
