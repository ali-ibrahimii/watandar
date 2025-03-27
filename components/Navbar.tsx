import React from 'react'
import Link from 'next/link'
import { translations } from '@/app/data/menuItems'
import { useLanguage } from '@/app/context/LanguageContext'

const Navbar = () => {
  const {language} = useLanguage()
  return (
    <nav className='space-x-4 font-bold relative'>
        <Link className='sticky' href="/food">{translations[language].food}</Link>
        <Link className='sticky' href="/drink">{translations[language]?.drink}</Link>
        <Link className='sticky' href="/salad">{translations[language]?.salad}</Link>
    </nav>
  )
}

export default Navbar