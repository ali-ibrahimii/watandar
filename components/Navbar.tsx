import React from 'react'
import Link from 'next/link'
import { translations } from '@/app/data/menuItems'
import { useLanguage } from '@/app/context/LanguageContext'

const Navbar = () => {
  const {language} = useLanguage()
  return (
    <div className='sticky top-0 text-white py-2 z-50 '>
      <nav className='space-x-4 font-bold relative'>
        <Link className='bg-gray-700 py-2 px-5 rounded-full' href="/food">{translations[language].food}</Link>
        <Link className='bg-gray-700 py-2 px-5 rounded-full' href="/drink">{translations[language]?.drink}</Link>
        <Link className='bg-gray-700 py-2 px-5 rounded-full' href="/salad">{translations[language]?.salad}</Link>
      </nav>
    </div>
  )
}

export default Navbar