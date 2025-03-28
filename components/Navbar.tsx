import React from 'react'
import Link from 'next/link'
import { translations } from '@/app/data/menuItems'
import { useLanguage } from '@/app/context/LanguageContext'

const Navbar = () => {
  const {language} = useLanguage()
  return (
    <div className='sticky top-0 bg-[#06141b] text-white py-2 z-50 '>
      <nav className='space-x-4 font-bold relative'>
        <Link className='' href="/food">{translations[language].food}</Link>
        <Link className='' href="/drink">{translations[language]?.drink}</Link>
        <Link className='' href="/salad">{translations[language]?.salad}</Link>
      </nav>
    </div>
  )
}

export default Navbar