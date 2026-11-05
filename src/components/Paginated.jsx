'use client'

import { Children, useEffect, useRef, useState } from 'react'
import { useLenis } from 'lenis/react'
import { gsap } from '@/lib/gsap'

/**
 * Shows server-rendered cards one page at a time.
 * Every card stays in the HTML (other pages are only hidden with CSS), so
 * search engines and link scrapers can read all of them.
 */
const Paginated = ({ children, perPage, gridClassName, label }) => {
  const lenis = useLenis()
  const items = Children.toArray(children)
  const [page, setPage] = useState(1)
  const gridRef = useRef(null)
  const isFirstRender = useRef(true)

  const totalPages = Math.ceil(items.length / perPage)
  const start = (page - 1) * perPage

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const cards = gridRef.current?.querySelectorAll(':scope > .contents > *')
    if (!cards?.length) return

    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: 'power2.out', overwrite: true }
    )
  }, [page])

  const goToPage = (nextPage) => {
    setPage(nextPage)

    requestAnimationFrame(() => {
      const section = gridRef.current?.closest('section')
      if (section) lenis?.scrollTo(section, { offset: -88 })
    })
  }

  const buttonClass =
    'h-9 px-3 rounded-lg text-sm bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'

  return (
    <>
      <div ref={gridRef} className={gridClassName}>
        {items.map((item, index) => (
          <div
            key={item.key}
            className={index >= start && index < start + perPage ? 'contents' : 'hidden'}
          >
            {item}
          </div>
        ))}
      </div>

      <nav
        aria-label={`${label} pages`}
        className='flex items-center justify-center gap-2 mt-6'
      >
        <button
          type='button'
          onClick={() => goToPage(Math.max(1, page - 1))}
          disabled={page === 1}
          className={buttonClass}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, index) => {
          const number = index + 1
          const isActive = number === page

          return (
            <button
              key={number}
              type='button'
              onClick={() => goToPage(number)}
              aria-label={`Page ${number}`}
              aria-current={isActive ? 'page' : undefined}
              className={`h-9 min-w-9 px-3 rounded-lg text-sm transition-colors ${
                isActive
                  ? 'bg-sky-400 text-zinc-950'
                  : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-100'
              }`}
            >
              {number}
            </button>
          )
        })}

        <button
          type='button'
          onClick={() => goToPage(Math.min(totalPages, page + 1))}
          disabled={page === totalPages}
          className={buttonClass}
        >
          Next
        </button>
      </nav>
    </>
  )
}

export default Paginated
