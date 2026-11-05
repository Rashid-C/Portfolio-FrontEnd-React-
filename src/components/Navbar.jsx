/**
 * @copyright 2025 RASHID_C
 * @license Apache-2.0
 */

'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLenis } from 'lenis/react'
import { SECTION_NAV_EVENT } from '@/lib/scroll'

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Work', id: 'work' },
  { label: 'Experience', id: 'experience' },
  { label: 'Reviews', id: 'reviews' },
  { label: 'Contact', id: 'contact', mobileOnly: true },
]

/** Sections with no nav link of their own highlight the link before them. */
const HIGHLIGHT_FOR = { skills: 'services' }

const Navbar = ({ navOpen, onNavigate }) => {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [scrolledTo, setScrolledTo] = useState('home')
  const links = useRef({})
  const activeBox = useRef(null)
  const sectionInView = useRef('home')
  const isNavScrolling = useRef(false)

  // Only the home page has sections to highlight.
  const activeId = isHome ? scrolledTo : null

  // When a link's scroll finishes (or the visitor takes over with the wheel),
  // go back to following the section in view.
  const lenis = useLenis((instance) => {
    if (!isNavScrolling.current || instance.isScrolling) return

    isNavScrolling.current = false
    setTimeout(() => setScrolledTo(sectionInView.current), 100)
  })

  // Highlight the destination straight away, instead of flickering through
  // every section the page passes on the way there.
  useEffect(() => {
    const handleSectionNav = ({ detail: id }) => {
      isNavScrolling.current = Boolean(lenis?.isScrolling)
      if (links.current[id]?.offsetWidth) setScrolledTo(id)
    }

    window.addEventListener(SECTION_NAV_EVENT, handleSectionNav)
    return () => window.removeEventListener(SECTION_NAV_EVENT, handleSectionNav)
  }, [lenis])

  // Track the section crossing a thin band near the top of the screen. An
  // observer needs no work on every scroll event, which keeps scrolling smooth.
  useEffect(() => {
    if (!isHome) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue

          const id = HIGHLIGHT_FOR[entry.target.id] ?? entry.target.id
          if (!links.current[id]?.offsetWidth) continue

          sectionInView.current = id
          if (!isNavScrolling.current) setScrolledTo(id)
        }
      },
      { rootMargin: '-15% 0px -84% 0px' }
    )

    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section))
    return () => observer.disconnect()
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
