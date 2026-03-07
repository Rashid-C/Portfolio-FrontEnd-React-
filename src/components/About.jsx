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
            Welcome! I&apos;m Rashid C, a full-stack web developer specializing in modern technologies like MERN Stack and Next.js. I create scalable, high-performance web applications that combine clean design with strong functionality. By blending creativity with technical expertise, I transform ideas into powerful digital products that deliver both excellent user experience and reliable performance.
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


