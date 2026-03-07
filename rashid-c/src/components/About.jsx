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
          <div className='text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch] space-y-4'>
            <p>Hi, I&apos;m Rashid C, a Full-Stack Software Developer specializing in MERN Stack and Next.js.</p>
            <p>I build scalable SaaS platforms, high-performance e-commerce systems, and modern web applications that combine clean architecture with exceptional user experience.</p>
            <p>With 3+ years of professional experience, I focus on creating fast, secure, and production-ready solutions using modern technologies like React, Next.js, Node.js, and PostgreSQL.</p>
            <p>My goal is simple — turn complex ideas into powerful digital products that scale.</p>
          </div>
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


