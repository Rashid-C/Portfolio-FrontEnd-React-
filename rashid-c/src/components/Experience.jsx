/**
 * @copyright 2026 RASHID_C
 * @license Apache-2.0
 */

const experiences = [
  {
    role: 'Back End Developer',
    company: 'Polosys Technologies LLP',
    duration: 'Jun 2026 - Present',
    location: 'Kozhikode, India',
    highlights: [
      'Built and maintained REST APIs across Sales Invoice, Sales Order, Delivery Challan, Estimates, Purchase, Inventory, and Customer modules in an organisation-scoped multi-tenant architecture serving the GCC and Saudi Arabia market.',
      'Cut VendorCredit transaction processing ~99% (110s → 800ms) by rebuilding the service layer with bulk database operations and a custom incremental FIFO engine (FIFOEngineV2), unblocking real-time invoice workflows.',
      'Reduced PurchaseInvoice processing from up to 60 seconds to 1-2 seconds using the same V2 architecture, removing a daily bottleneck in accounting operations.',
      'Fixed 14 interconnected bugs across 5 files in the Delivery Challan module - inventory reversal, status-machine handling, and DC-to-invoice conversion edge cases including voided and bulk-deleted invoices.',
      'Added multi-unit quantity conversion (carton to piece) across Delivery Challan, Sales Order, and Sales Invoice, letting items be sold in one unit while inventory tracks in another without breaking downstream documents.',
      'Resolved production crashes in Sales By Item and Sales By Customer reports caused by soft-deleted records, replacing unsafe .get() calls with .filter().first() fallbacks.',
      'Corrected Statement, Receipt Voucher, and Payment PDF templates from US Letter to A4 to meet GCC document standards.',
      'Authored the platform\'s technical documentation site in Docusaurus - 13 business modules, API reference, backend architecture, and a frontend developer onboarding guide.',
      'Audited 579 files across 27 Django apps, documented 21 architectural issues, and closed out hardcoded secrets and weak key configurations before they became incidents.',
    ],
  },
  {
    role: 'Full Stack Engineer',
    company: 'AZC Electronics Trading LLC',
    duration: 'Jan 2026 - Present',
    location: 'Dubai, UAE',
    highlights: [
      'Built and maintain a production e-commerce platform by owning the full stack in Next.js, TypeScript, and MongoDB, keeping it live for GCC customers.',
      'Enabled multiple payment options and cleaner order handling by integrating two payment gateways and building end-to-end order/admin workflows.',
      'Improved reach and usability across Gulf markets by implementing SEO architecture and multilingual support, and added AI-powered customer engagement tooling.',
    ],
  },
  {
    role: 'Freelance Developer',
    company: 'Self-Employed',
    duration: 'Sep 2025 - Dec 2025',
    location: 'Remote',
    highlights: [
      'Lifted user engagement 15% on an LMS and e-commerce platform by shipping new MERN-stack features as part of a 4-person team, designing and integrating the RESTful APIs end to end.',
      'Cut component load time 10% by refactoring legacy React components, improving readability for the rest of the team.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Doctosmart, Govt. CyberPark',
    duration: 'Jul 2024 - Sep 2025',
    location: 'Calicut, India',
    highlights: [
      'Delivered a full IVF clinic management system by designing the relational database schema and REST APIs in Django/DRF and PostgreSQL, covering patient records, appointments, and medical history.',
      'Built a MERN-stack blog platform end to end - authentication, CRUD for posts and comments, image uploads, and a responsive React front end - as a solo ownership project.',
    ],
  },
  {
    role: 'MERN Stack Developer',
    company: 'Learnbuds',
    duration: 'Jan 2024 - Jul 2024',
    location: 'Ernakulam, India',
    highlights: [
      'Built the authentication module for a matrimony platform (MERN stack) - sign-up, login, and JWT/session-based token generation - by designing the token and session-handling layer.',
      'Added self-service password-reset flows so users could recover account access without manual intervention.',
    ],
  },
  {
    role: 'MERN Stack Developer',
    company: 'Brototype',
    duration: 'Oct 2022 - Dec 2023',
    location: 'Malappuram, India',
    highlights: [
      'Completed an intensive MERN program focused on production-ready full-stack development.',
      'Built multiple projects including e-commerce, social, and booking systems using React, Node.js, and MongoDB.',
    ],
  },
  {
    role: 'AI-Data Scientist',
    company: 'DDU-GKY',
    duration: 'Mar 2022 - Aug 2022',
    location: 'Hyderabad, India',
    highlights: [
      'Completed an AI & Data Science certification covering Python, HTML, CSS, and data structures.',
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
