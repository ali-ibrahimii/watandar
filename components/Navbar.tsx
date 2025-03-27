import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='space-x-4'>
        <Link href="/food">Food</Link>
        <Link href="/drink">Drink</Link>
        <Link href="/salad">Salad</Link>
    </nav>
  )
}

export default Navbar