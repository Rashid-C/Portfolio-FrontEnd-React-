import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Hero from '@/components/Hero'
import Review from '@/components/Review'
import Service from '@/components/Service'
import Skill from '@/components/Skill'
import Work from '@/components/Work'

export const metadata = {
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
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
  )
}
