/**
 * @copyright 2026 RASHID_C
 * @license Apache-2.0
 */

import { useEffect, useRef, useState } from 'react'
import { useLenis } from 'lenis/react'
import { gsap } from 'gsap'

const services = [
  {
    icon: 'language',
    title: 'Web Development',
    desc: 'Scalable web applications with clean architecture, SEO foundations, and production-ready delivery.',
  },
  {
    icon: 'smartphone',
    title: 'Mobile App Development',
    desc: 'Cross-platform mobile experiences focused on performance, usability, and maintainable codebases.',
  },
  {
    icon: 'dns',
    title: 'Backend Development',
    desc: 'Secure REST APIs, authentication systems, role-based access, and reliable server-side logic.',
  },
  {
    icon: 'database',
    title: 'Database Management',
    desc: 'Schema design, query optimization, indexing, migrations, and high-performance data operations.',
  },
  {
    icon: 'cloud',
    title: 'Cloud Integration',
    desc: 'Cloud deployments, storage integrations, environment setup, and scalable infrastructure workflows.',
  },
  {
    icon: 'payments',
    title: 'Payment Gateway Integration',
    desc: 'Stripe/PayPal integrations with secure checkout, subscriptions, and transaction reliability.',
  },
  {
    icon: 'security',
    title: 'Security and Authentication',
    desc: 'JWT/OAuth flows, API hardening, validation layers, and secure access management.',
  },
  {
    icon: 'trending_up',
    title: 'SEO Optimization',
    desc: 'On-page SEO, technical SEO setup, metadata strategy, and search visibility improvements.',
  },
  {
    icon: 'devices',
    title: 'Responsive Design',
    desc: 'Consistent user experience across mobile, tablet, and desktop with modern UI implementation.',
  },
  {
    icon: 'rocket_launch',
    title: 'Performance Optimization',
    desc: 'Faster loading and API response times through caching, tuning, and frontend optimization.',
  },
  {
    icon: 'build',
    title: 'Software Maintenance',
    desc: 'Continuous support, bug fixing, version upgrades, and feature enhancement after launch.',
  },
]

const iconStyles = [
  {
    halo: 'from-cyan-300/40 to-sky-500/10',
    gradFrom: '#67e8f9',
    gradTo: '#0ea5e9',
  },
  {
    halo: 'from-emerald-300/40 to-teal-500/10',
    gradFrom: '#6ee7b7',
    gradTo: '#14b8a6',
  },
  {
    halo: 'from-fuchsia-300/35 to-violet-500/10',
    gradFrom: '#f0abfc',
    gradTo: '#8b5cf6',
  },
]

const ITEMS_PER_PAGE = 6

const Service = () => {
  const lenis = useLenis()
  const [currentPage, setCurrentPage] = useState(1)
  const sectionRef = useRef(null)
  const isFirstRender = useRef(true)
  const totalPages = Math.ceil(services.length / ITEMS_PER_PAGE)

  const start = (currentPage - 1) * ITEMS_PER_PAGE
  const currentServices = services.slice(start, start + ITEMS_PER_PAGE)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    if (!sectionRef.current) return

    const cards = sectionRef.current.querySelectorAll('.reveal-up')
    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: 'power2.out', overwrite: true }
    )
  }, [currentPage])

  const handlePageChange = (nextPage) => {
    setCurrentPage(nextPage)

    requestAnimationFrame(() => {
      if (!sectionRef.current) return
      lenis?.scrollTo(sectionRef.current, { offset: -88 })
    })
  }

  return (
    <section id='services' className='section' ref={sectionRef}>
      <div className='container'>
        <h2 className='headline-2 mb-3 reveal-up'>My Services</h2>

        <p className='text-zinc-400 mt-3 mb-8 max-w-[60ch] reveal-up'>
          High-impact services focused on building secure, scalable, and
          business-ready digital products.
        </p>

        <div className='grid gap-3 md:grid-cols-2 lg:grid-cols-3'>
          {currentServices.map(({ icon, title, desc }, index) => {
            const style = iconStyles[(start + index) % iconStyles.length]

            return (
              <article
                key={title}
                style={{ '--card-grad-from': style.gradFrom, '--card-grad-to': style.gradTo }}
                className='glass-card reveal-up group relative p-4 rounded-2xl bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.05] ring-1 ring-inset ring-white/10 transition-[background-color,transform] hover:-translate-y-0.5'
              >
                <div
                  className={`absolute -top-6 -right-4 w-20 h-20 rounded-full blur-2xl bg-gradient-to-br ${style.halo} pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <div className='relative w-8 h-8 rounded-lg grid place-items-center mb-3 bg-white/5 ring-1 ring-white/10 group-hover:ring-white/20 transition-all group-hover:scale-105'>
                  <span
                    className='material-symbols-rounded text-[15px] bg-clip-text text-transparent'
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${style.gradFrom}, ${style.gradTo})`,
                    }}
                    aria-hidden='true'
                  >
                    {icon}
                  </span>
                </div>

                <h3 className='title-1 mb-2'>{title}</h3>
                <p className='text-zinc-400 text-sm'>{desc}</p>
              </article>
            )
          })}
        </div>

        <div className='flex items-center justify-center gap-2 mt-6'>
          <button
            type='button'
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className='h-9 px-3 rounded-lg text-sm bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1
            const isActive = page === currentPage

            return (
              <button
                key={page}
                type='button'
                onClick={() => handlePageChange(page)}
                className={`h-9 min-w-9 px-3 rounded-lg text-sm transition-colors ${
                  isActive
                    ? 'bg-sky-400 text-zinc-950'
                    : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-100'
                }`}
              >
                {page}
              </button>
            )
          })}

          <button
            type='button'
            onClick={() =>
              handlePageChange(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
            className='h-9 px-3 rounded-lg text-sm bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
          >
            Next
          </button>
        </div>
      </div>
    </section>
  )
}

export default Service


