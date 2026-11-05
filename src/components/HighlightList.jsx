'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const DEFAULT_VISIBLE = 3

/** Every highlight stays in the HTML for search engines; the extras are only hidden with CSS. */
const HighlightList = ({ items }) => {
  const [expanded, setExpanded] = useState(false)
  const remaining = items.length - DEFAULT_VISIBLE

  return (
    <>
      <ul className='mt-4 space-y-2'>
        {items.map((item, index) => (
          <li
            key={item}
            className={`text-sm md:text-base text-zinc-300 gap-2 ${
              !expanded && index >= DEFAULT_VISIBLE ? 'hidden' : 'flex'
            }`}
          >
            <span
              className='mt-2 h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0'
              aria-hidden='true'
            ></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {remaining > 0 && (
        <button
          type='button'
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          className='mt-3 text-sm text-sky-400 hover:text-sky-300 transition-colors inline-flex items-center gap-1'
        >
          {expanded ? 'Show less' : `Show ${remaining} more`}
          <ChevronDown
            size={18}
            className={`transition-transform ${expanded ? 'rotate-180' : ''}`}
            aria-hidden='true'
          />
        </button>
      )}
    </>
  )
}

export default HighlightList
