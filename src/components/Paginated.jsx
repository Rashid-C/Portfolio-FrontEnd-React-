'use client'

import { Children, useLayoutEffect, useRef, useState } from 'react'
import { useLenis } from 'lenis/react'
import { gsap } from '@/lib/gsap'
import { scrollToSection } from '@/lib/scroll'

/** A section's heading above this line is hidden by the fixed header. */
const HEADER_BOTTOM = 72

/**
 * Shows server-rendered cards one page at a time.
 *
 * All pages are stacked in the same grid cell and only the current one is
 * visible. So every card stays in the HTML for search engines, images load
 * before they are needed, the buttons never move (the height is always the
 * tallest page), and switching pages needs no new layout.
 */
const Paginated = ({ children, perPage, gridClassName, label }) => {
  const lenis = useLenis()
  const items = Children.toArray(children)
  const [page, setPage] = useState(1)
  const stackRef = useRef(null)
  const shownPage = useRef(1)

  const totalPages = Math.ceil(items.length / perPage)
  const pages = Array.from({ length: totalPages }, (_, index) =>
    items.slice(index * perPage, (index + 1) * perPage)
  )

  // Runs before paint, so new cards never flash at full opacity first.
  useLayoutEffect(() => {
    if (shownPage.current === page) return
    shownPage.current = page

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const cards = stackRef.current?.children[page - 1]?.children
    if (!cards?.length) return

    gsap.fromTo(
      cards,
      { opacity: 0, y: 12 },
      {
        opacity: 1,
        y: 0,
        duration: 0.25,
        stagger: 0.03,
        ease: 'power2.out',
        overwrite: true,
        clearProps: 'opacity,transform',
      }
    )
  }, [page])

  const goToPage = (nextPage) => {
    if (nextPage === page) return
    setPage(nextPage)

    // Stay put while the heading is in view, so the buttons stay under the
    // cursor. Only long sections need taking back to their start.
    const section = stackRef.current?.closest('section')
    const heading = section?.querySelector('h2')
    if (heading && heading.getBoundingClientRect().top < HEADER_BOTTOM) {
      scrollToSection(lenis, section)
    }
  }

  const buttonClass =
    'h-9 px-3 rounded-lg text-sm bg-zinc-800 hover:bg-zinc-700 active:scale-95 touch-manipulation disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 transition-[background-color,transform]'

  return (
    <>
      <div ref={stackRef} className='grid'>
        {pages.map((cards, index) => (
          <div
            key={index}
            className={`${gridClassName} [grid-area:1/1] content-start ${
              index === page - 1 ? '' : 'invisible'
            }`}
          >
            {cards}
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

        {pages.map((_, index) => {
          const number = index + 1
          const isActive = number === page

          return (
            <button
              key={number}
              type='button'
              onClick={() => goToPage(number)}
              aria-label={`Page ${number}`}
              aria-current={isActive ? 'page' : undefined}
              className={`h-9 min-w-9 px-3 rounded-lg text-sm active:scale-95 touch-manipulation transition-[background-color,transform] ${
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
