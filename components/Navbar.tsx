import React from 'react'
import Link from 'next/link'
import { translations } from '@/app/data/menuItems'
import { useLanguage } from '@/app/context/LanguageContext'

const Navbar = () => {
  const {language} = useLanguage()
  return (
    <nav className='space-x-4'>
        <Link href="/food">{translations[language].food}</Link>
        <Link href="/drink">{translations[language]?.drink}</Link>
        <Link href="/salad">{translations[language]?.salad}</Link>
    </nav>
  )
}

export default Navbar