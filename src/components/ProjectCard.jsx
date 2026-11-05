/**
 * @copyright 2024 RASHID_C
 * @license Apache-2.0
 */

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const gradients = [
  { from: '#67e8f9', to: '#0ea5e9' },
  { from: '#6ee7b7', to: '#14b8a6' },
  { from: '#f0abfc', to: '#8b5cf6' },
]

const MAX_VISIBLE_TAGS = 3

/** Cards with a case study open it on this site; the rest open the live project. */
const ProjectCard = ({ project, index = 0 }) => {
  const { slug, imgSrc, title, tags, projectLink, caseStudy } = project
  const style = gradients[index % gradients.length]
  const visibleTags = tags.slice(0, MAX_VISIBLE_TAGS)
  const hiddenCount = tags.length - MAX_VISIBLE_TAGS
  const Arrow = caseStudy ? ArrowRight : ArrowUpRight

  return (
    <div
      style={{ '--card-grad-from': style.from, '--card-grad-to': style.to }}
      className='glass-card group relative h-full p-4 rounded-2xl bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.05] ring-1 ring-inset ring-white/10 transition-[background-color,transform] hover:-translate-y-0.5'
    >
      <figure className='img-box aspect-video rounded-lg mb-4'>
        <Image
          src={imgSrc}
          alt={title}
          sizes='(min-width: 1024px) 260px, (min-width: 640px) 45vw, 50vw'
          placeholder='blur'
          className='img-cover'
        />
      </figure>

      <div className='flex items-start justify-between gap-3'>
        <div className='min-w-0 flex-1'>
          <h3
            className='text-base md:text-lg leading-snug font-normal mb-3 line-clamp-2'
            title={title}
          >
            {title}
          </h3>

          <div className='flex flex-wrap items-center gap-1.5'>
            {visibleTags.map((label) => (
              <span
                key={label}
                title={label}
                className='h-6 leading-6 text-xs text-zinc-400 bg-zinc-50/5 block max-w-full truncate px-2.5 rounded-md'
              >
                {label}
              </span>
            ))}

            {hiddenCount > 0 && (
              <span className='h-6 text-xs text-zinc-500 bg-zinc-50/5 grid items-center px-2.5 rounded-md'>
                +{hiddenCount}
              </span>
            )}
          </div>
        </div>

        <div className='hidden sm:grid w-11 h-11 rounded-lg place-items-center bg-sky-400 text-zinc-950 shrink-0 self-start'>
          <Arrow aria-hidden='true' />
        </div>
      </div>

      {caseStudy ? (
        <Link
          href={`/projects/${slug}`}
          aria-label={`Read about ${caseStudy.name}`}
          className='absolute inset-0 rounded-2xl'
        ></Link>
      ) : (
        <a
          href={projectLink}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={`Open project: ${title}`}
          className='absolute inset-0 rounded-2xl'
        ></a>
      )}
    </div>
  )
}

export default ProjectCard
