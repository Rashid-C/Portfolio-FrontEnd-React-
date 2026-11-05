'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { ReactLenis, useLenis } from 'lenis/react'
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap'
import { scrollToSection, SECTION_NAV_EVENT } from '@/lib/scroll'

/** Runs Lenis and GSAP on one animation clock, so they never disagree about the scroll position. */
const SharedClock = () => {
  const lenis = useLenis(ScrollTrigger.update)

  useEffect(() => {
    if (!lenis) return

    const tick = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => gsap.ticker.remove(tick)
  }, [lenis])

  return null
}

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
      scrollToSection(lenis, target)
      window.dispatchEvent(new CustomEvent(SECTION_NAV_EVENT, { detail: target.id }))

      // Keyboard users continue tabbing from the section they jumped to.
      target.setAttribute('tabindex', '-1')
      target.focus({ preventScroll: true })
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
            duration: 0.6,
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
      autoRaf={false}
      options={{ lerp: 0.08, smoothWheel: true, touchMultiplier: 1.1 }}
    >
      <SharedClock />
      <SectionLinks />
      <RevealOnScroll />
      {children}
    </ReactLenis>
  )
}

export default SmoothScroll
