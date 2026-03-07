/**
 * @copyright 2024 RASHID_C
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { ReactLenis } from 'lenis/react'
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
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true, syncTouch: true, touchMultiplier: 1.1 }}>
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

