'use client'

import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

/** Slides its children sideways as the page scrolls. */
const ScrubSlide = ({ children }) => {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: '-200% 80%',
          end: '400% 80%',
          scrub: true,
        },
        x: '-1000',
      })
    },
    { scope: ref }
  )

  return (
    <div ref={ref} className='flex items-stretch gap-3 w-fit'>
      {children}
    </div>
  )
}

export default ScrubSlide
