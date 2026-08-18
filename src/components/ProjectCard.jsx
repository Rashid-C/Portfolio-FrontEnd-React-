/**
 * @copyright 2024 RASHID_C
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import PropTypes from 'prop-types'

const gradients = [
  { from: '#67e8f9', to: '#0ea5e9' },
  { from: '#6ee7b7', to: '#14b8a6' },
  { from: '#f0abfc', to: '#8b5cf6' },
]

const MAX_VISIBLE_TAGS = 3

const ProjectCard = ({ imgSrc, title, tags, projectLink, classes, index = 0 }) => {
  const style = gradients[index % gradients.length]
  const visibleTags = tags.slice(0, MAX_VISIBLE_TAGS)
  const hiddenCount = tags.length - MAX_VISIBLE_TAGS

  return (
    <div
      style={{ '--card-grad-from': style.from, '--card-grad-to': style.to }}
      className={
        'glass-card group relative h-full p-4 rounded-2xl bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.05] ring-1 ring-inset ring-white/10 transition-[background-color,transform] hover:-translate-y-0.5 ' +
        classes
      }
    >
      <figure className='img-box aspect-video rounded-lg mb-4'>
        <img src={imgSrc} alt={title} loading='lazy' className='img-cover' />
      </figure>

      <div className='flex items-start justify-between gap-3'>
        <div className='min-w-0 flex-1'>
          <h3 className='title-1 mb-3 truncate'>{title}</h3>

          <div className='flex flex-wrap items-center gap-1.5'>
            {visibleTags.map((label, key) => (
              <span
                key={key}
                className='h-6 text-xs text-zinc-400 bg-zinc-50/5 grid items-center px-2.5 rounded-md whitespace-nowrap'
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

        <div className='w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0 self-start'>
          <span className='material-symbols-rounded' aria-hidden='true'>
            arrow_outward
          </span>
        </div>
      </div>

      <a
        href={projectLink}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={`Open project: ${title}`}
        className='absolute inset-0'
      ></a>
    </div>
  )
}

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
  index: PropTypes.number,
}
export default ProjectCard
