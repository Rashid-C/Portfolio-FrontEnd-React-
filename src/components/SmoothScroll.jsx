'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { ReactLenis, useLenis } from 'lenis/react'
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap'

const HEADER_OFFSET = 88

/**
 * On the home page, section links ("/#about", etc.) scroll smoothly through
 * Lenis. Calling preventDefault makes next/link skip its own navigation.
 * On other pages the link navigates to the home page section as normal.
 */
const SectionLinks = () => {
  const lenis = useLenis()
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== '/') return

    const handleClick = (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return
      }

      const anchor = event.target.closest?.('a[href^="/#"]')
      if (!anchor) return

      const target = document.querySelector(anchor.getAttribute('href').slice(1))
      if (!target) return

      event.preventDefault()
      if (lenis) {
        lenis.scrollTo(target, { offset: -HEADER_OFFSET })
      } else {
        target.scrollIntoView()
      }
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [lenis, pathname])

  return null
}

/** Fades `.reveal-up` elements in as they scroll into view, on every page. */
const RevealOnScroll = () => {
  const pathname = usePathname()

  useGSAP(
    () => {
      ScrollTrigger.batch(gsap.utils.toArray('.reveal-up'), {
        start: '-200 bottom',
        onEnter: (batch) =>
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            // A jump to a section reveals everything above it at once, so cap
            // the total stagger or the section you landed on appears last.
            stagger: { amount: Math.min(batch.length * 0.1, 0.6) },
          }),
      })
    },
    { dependencies: [pathname], revertOnUpdate: true }
  )

  return null
}

const SmoothScroll = ({ children }) => {
  return (
    <ReactLenis
      root
      options={{ lerp: 0.08, smoothWheel: true, touchMultiplier: 1.1 }}
    >
      <SectionLinks />
      <RevealOnScroll />
      {children}
    </ReactLenis>
  )
}

export default SmoothScroll
