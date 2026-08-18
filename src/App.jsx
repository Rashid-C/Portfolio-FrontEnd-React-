/**
 * @copyright 2024 RASHID_C
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { useEffect } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger)

/**
 * Components
 */
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Footer from './components/Footer'
import Header from './components/Header'
import Review from './components/Review'
import Service from './components/Service'
import Skill from './components/Skill'
import Work from './components/Work'
import Hero from './Hero'

const HEADER_OFFSET = 88

/**
 * Routes every same-page anchor click (nav links, "Scroll down",
 * footer sitemap, etc.) through Lenis instead of the browser's native
 * smooth scroll, so the two don't fight over scroll position.
 */
const ScrollLinkHandler = () => {
  const lenis = useLenis()

  useEffect(() => {
    const handleClick = (event) => {
      if (event.defaultPrevented) return

      const anchor = event.target.closest('a[href^="#"]')
      if (!anchor) return

      const id = anchor.getAttribute('href')
      if (!id || id === '#') return

      const target = document.querySelector(id)
      if (!target) return

      event.preventDefault()
      lenis?.scrollTo(target, { offset: -HEADER_OFFSET })
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [lenis])

  return null
}

const App = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up')

    ScrollTrigger.batch(elements, {
      start: '-200 bottom',
      onEnter: (batch) =>
        gsap.to(batch, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.1,
        }),
    })
  }, [])

  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true, touchMultiplier: 1.1 }}>
      <ScrollLinkHandler />
      <Header />
      <main>
        <Hero />
        <About />
        <Service />
        <Skill />
        <Work />
        <Experience />
        <Review />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </ReactLenis>
  )
}

export default App

