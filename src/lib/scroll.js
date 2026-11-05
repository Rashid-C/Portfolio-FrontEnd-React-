/** Fired when a section link starts a scroll, so the nav can highlight the destination straight away. */
export const SECTION_NAV_EVENT = 'portfolio:section-nav'

/** Where a section's content lands: just below the fixed header, with the previous section out of view. */
const LANDING_TOP = 104

const MIN_DURATION = 0.55
const MAX_DURATION = 1.1

const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const sectionTop = (section) => {
  if (section.id === 'home') return 0

  const paddingTop = parseFloat(getComputedStyle(section).paddingTop)
  // Never stop above the section's top edge, or the previous section shows.
  return window.scrollY + section.getBoundingClientRect().top + Math.max(0, paddingTop - LANDING_TOP)
}

/**
 * Scrolls to a section in a fixed time, so it arrives cleanly instead of
 * crawling over the last few pixels. Longer distances take slightly longer.
 */
export const scrollToSection = (lenis, section) => {
  const top = sectionTop(section)
  const reduced = prefersReducedMotion()

  if (!lenis) {
    window.scrollTo({ top, behavior: reduced ? 'instant' : 'smooth' })
    return
  }

  if (reduced) {
    lenis.scrollTo(top, { immediate: true })
    return
  }

  const distance = Math.abs(top - window.scrollY)
  const duration = Math.min(MAX_DURATION, Math.max(MIN_DURATION, 0.45 + distance / 6000))

  lenis.scrollTo(top, { duration, easing: easeInOutCubic })
}
