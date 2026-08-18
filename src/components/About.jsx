/**
 * @copyright 2024 RASHID_C
 * @license Apache-2.0
 */
import logo from '../images/logo-rc.svg'

const aboutItems = [
  {
    label: 'Project done',
    number: 45,
  },
  {
    label: 'Years of experience',
    number: 3,
  },
]

const About = () => {
  return (
    <section id='about' className='section'>
      <div className='container'>
        <div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up'>
          <p className='text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]'>
            I&apos;m Rashid C, a full-stack developer with 3+ years of experience across Django/DRF, Next.js, React, Node.js, MongoDB, and PostgreSQL. I specialize in identifying performance bottlenecks and architectural weaknesses, then re-engineering systems for scale and reliability &mdash; most recently reducing a vendor-credit transaction from 110 seconds to under a second by rebuilding the service layer with bulk database operations and a custom incremental FIFO engine. I currently build production-grade SaaS, ERP, and e-commerce platforms for businesses across the GCC and India.
          </p>
          <p className='sr-only'>Open to Software Developer roles in GCC, Dubai, Saudi Arabia, Kerala, and across India. Also searchable as Rashid, Rashidc, Rashid C, Rashid_C, Rashid-C, and rashidc___.</p>
          <div className='flex flex-wrap items-center gap-4 md:gap-7'>
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className='flex items-center md:mb-2'>
                  <span className='text-2xl font-semibold md:text-4xl'>
                    {number}
                  </span>
                  <span className='text-sky-400 font-semibold md:text-3xl'>
                    +
                  </span>
                </div>

                <p className='text-sm text-zinc-400'>{label}</p>
              </div>
            ))}

            <img
              // src="/src/images/logo.svg"
              src={logo}
              height={30}
              width={30}
              className='ml-auto md:w-[40px] md:h-[40px]'
              alt='Logo'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


