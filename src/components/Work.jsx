/**
 * @copyright 2024 RASHID_C
 * @license Apache-2.0
 */

import Paginated from './Paginated'
import ProjectCard from './ProjectCard'
import { projects } from '@/data/projects'

const Work = () => {
  return (
    <section id='work' className='section'>
      <div className='container'>
        <h2 className='headline-2 mb-8 reveal-up'>Major projects</h2>

        <div className='reveal-up'>
          <Paginated
            perPage={4}
            label='Projects'
            gridClassName='grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4'
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </Paginated>
        </div>
      </div>
    </section>
  )
}

export default Work
