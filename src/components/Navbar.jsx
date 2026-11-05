/**
 * @copyright 2025 RASHID_C
 * @license Apache-2.0
 */

'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Work', id: 'work' },
  { label: 'Experience', id: 'experience' },
  { label: 'Reviews', id: 'reviews' },
  { label: 'Contact', id: 'contact', mobileOnly: true },
]

const SCROLL_OFFSET = 120

const Navbar = ({ navOpen, onNavigate }) => {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [scrolledTo, setScrolledTo] = useState('home')
  const links = useRef({})
  const activeBox = useRef(null)

  // Only the home page has sections to highlight.
  const activeId = isHome ? scrolledTo : null

  // Track the section in view. Sections with no visible nav link (Skills, and
  // Contact on desktop) keep the previous section highlighted.
  useEffect(() => {
    if (!isHome) return

    const handleScroll = () => {
      let current = 'home'

      for (const { id } of NAV_ITEMS) {
        const section = document.getElementById(id)
        if (!section || !links.current[id]?.offsetWidth) continue
        if (window.scrollY >= section.offsetTop - SCROLL_OFFSET) current = id
      }

      setScrolledTo(current)
    }

    const frame = requestAnimationFrame(handleScroll)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isHome])

  // Move the white highlight behind the active link.
  useEffect(() => {
    const placeBox = () => {
      const box = activeBox.current
      if (!box) return

      const link = activeId ? links.current[activeId] : null
      if (!link?.offsetWidth) {
        box.style.opacity = '0'
        return
      }

      box.style.opacity = '1'
      box.style.top = `${link.offsetTop}px`
      box.style.left = `${link.offsetLeft}px`
      box.style.width = `${link.offsetWidth}px`
      box.style.height = `${link.offsetHeight}px`
      // From here the sliding box takes over from the link's own CSS highlight.
      box.parentElement.dataset.ready = 'true'
    }

    placeBox()
    document.fonts?.ready.then(placeBox)
    window.addEventListener('resize', placeBox)

    return () => window.removeEventListener('resize', placeBox)
  }, [activeId])

  return (
    <nav aria-label='Main' className={`navbar ${navOpen ? 'active' : ''}`}>
      {NAV_ITEMS.map(({ label, id, mobileOnly }) => (
        <Link
          key={id}
          href={`/#${id}`}
          ref={(element) => {
            links.current[id] = element
          }}
          onClick={onNavigate}
          aria-current={activeId === id ? 'true' : undefined}
          className={`nav-link ${mobileOnly ? 'md:hidden' : ''} ${
            activeId === id ? 'active' : ''
          }`}
        >
          {label}
        </Link>
      ))}
      <div className='active-box' ref={activeBox}></div>
    </nav>
  )
}

export default Navbar
