/**
 * @copyright 2024 RASHID_C
 * @license Apache-2.0
 */

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Navbar from './Navbar'
import logo from '@/images/logo-rc.svg'

const Header = () => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <header className='fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0'>
      <div className='max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[auto,1fr,auto] md:gap-4 lg:grid-cols-[1fr,3fr,1fr] lg:gap-0'>
        <div>
          <Link href='/' className='logo' aria-label='Rashid C home'>
            <Image src={logo} alt='' width={40} height={40} preload />
          </Link>
        </div>

        <div className='relative md:justify-self-center md:top-0'>
          <button
            type='button'
            className='menu-btn md:hidden top-0'
            onClick={() => setNavOpen((prev) => !prev)}
            aria-label={navOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={navOpen}
          >
            {navOpen ? <X aria-hidden='true' /> : <Menu aria-hidden='true' />}
          </button>
          <Navbar navOpen={navOpen} onNavigate={() => setNavOpen(false)} />
        </div>

        <Link
          href='/#contact'
          className='btn btn-secondary whitespace-nowrap max-md:hidden md:justify-self-end'
        >
          Contact Me
        </Link>
      </div>
    </header>
  )
}

export default Header
