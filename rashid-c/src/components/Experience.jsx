/**
 * @copyright 2026 RASHID_C
 * @license Apache-2.0
 */

const experiences = [
  {
    role: 'Software Developer',
    company: 'AZC Electronics Trading LLC',
    duration: 'Feb 2025 - Present',
    location: 'UAE',
    highlights: [
      'Developing a full-stack SEO-friendly e-commerce platform using Next.js with SSR and SSG.',
      'Building product catalog, cart, secure checkout, and responsive UI/UX features.',
    ],
  },
  {
    role: 'Freelance Full-Stack Developer',
    company: 'Self-Employed',
    duration: 'Dec 2024 - Feb 2025',
    location: 'Remote',
    highlights: [
      'Built an LMS using Next.js, Neon PostgreSQL, and Prisma with OTP, GitHub OAuth, Stripe, and S3 uploads.',
      'Developed a multi-vendor e-commerce SaaS marketplace with Stripe payouts and CI/CD deployment on Vercel.',
      'Improved engagement by 15% and load speed by 40% using caching and performance optimization.',
    ],
  },
  {
    role: 'Full-Stack MERN Developer',
    company: 'Doctosmart Enterprises, Govt. CyberPark',
    duration: 'Jul 2024 - Dec 2024',
    location: 'Calicut, India',
    highlights: [
      'Architected and deployed production-ready healthcare web modules with 99.5% uptime using the MERN stack.',
      'Developed a blog platform with Google OAuth, Gmail verification, RBAC, and a comprehensive admin dashboard.',
      'Optimized database queries and implemented Redis caching, reducing API response time by 60%.',
      'Enhanced UI/UX with dark and light mode support, responsive design, and scalable REST APIs.',
      'Conducted code reviews and mentored junior developers on clean code and MERN best practices.',
    ],
  },
  {
    role: 'MERN Stack Developer',
    company: 'Learnbuds',
    duration: 'May 2024 - Jul 2024',
    location: 'Kochi, India',
    highlights: [
      'Contributed to an edtech platform serving 5,000+ active learners.',
      'Improved API efficiency by 20% through query optimization and indexing.',
      'Automated backend workflows with Python, boosting system performance by 25%.',
    ],
  },
  {
    role: 'Software Development Intern',
    company: 'Brototype',
    duration: 'Nov 2022 - Aug 2023',
    location: 'Malappuram, India',
    highlights: [
      'Completed a 9-month intensive MERN program focused on production-ready full-stack development.',
      'Built 10+ projects including e-commerce, social, and booking systems using React, Node.js, and MongoDB.',
      'Practiced clean architecture, testing, deployment, Git workflow, and Agile methods.',
    ],
  },
]

const Experience = () => {
  return (
    <section id='experience' className='section'>
      <div className='container'>
        <h2 className='headline-2 mb-3 reveal-up'>Work experience</h2>

        <p className='text-zinc-400 mb-8 max-w-[60ch] reveal-up'>
          Roles and projects where I contributed to shipping reliable,
          user-focused web applications.
        </p>

        <div className='grid gap-4 md:gap-5'>
          {experiences.map(
            ({ role, company, duration, location, highlights }, index) => (
              <article
                key={index}
                className='reveal-up relative p-5 md:p-7 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors'
              >
                <div className='absolute left-0 top-6 bottom-6 w-1 rounded-full bg-sky-400/80'></div>

                <div className='pl-4'>
                  <div className='flex flex-wrap items-start justify-between gap-3'>
                    <div>
                      <h3 className='title-1'>{role}</h3>
                      <p className='text-zinc-300 mt-1'>
                        {company}{' '}
                        <span className='text-zinc-500'>- {location}</span>
                      </p>
                    </div>

                    <p className='h-8 text-sm text-zinc-200 bg-zinc-50/10 grid items-center px-3 rounded-lg'>
                      {duration}
                    </p>
                  </div>

                  <ul className='mt-4 space-y-2'>
                    {highlights.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className='text-sm md:text-base text-zinc-300 flex gap-2'
                      >
                        <span
                          className='mt-2 h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0'
                          aria-hidden='true'
                        ></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default Experience
