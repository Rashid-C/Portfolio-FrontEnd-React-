/**
 * @copyright 2024 RASHID_C
 * @license Apache-2.0
 */

/**
 * Track record, laid out like line items on an invoice:
 * label on the left, a dotted leader, the figure on the right.
 */
const ledger = [
  { label: 'Years shipping software', value: '4+' },
  { label: 'Projects delivered', value: '45+' },
  { label: 'Tests on NezeX One', value: '527' },
  { label: 'Live database migrations', value: '127' },
  { label: 'Transaction time', value: '110 s → 0.8 s' },
]

const About = () => {
  return (
    <section id='about' className='section'>
      <div className='container'>
        <div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up'>
          <h2 className='headline-2 max-w-[20ch] mb-8 md:mb-10'>
            I build the software a business runs on every day.
          </h2>

          <div className='grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14'>
            <div className='max-w-[62ch]'>
              <p className='text-zinc-300 md:text-lg leading-relaxed mb-5'>
                I&apos;m Rashid C, a full-stack engineer in Dubai, UAE. Over
                4 years I&apos;ve taken products from database schema to
                deployed release: Next.js and React on the front end, Django,
                NestJS and Node.js on the back end, PostgreSQL underneath.
              </p>

              <p className='text-zinc-400 leading-relaxed mb-8'>
                Right now I&apos;m the only engineer on NezeX One, a
                multi-tenant cloud ERP that a UAE business uses daily for sales,
                purchasing, inventory and VAT invoicing. I care most about the
                unglamorous parts &mdash; permissions, audit trails, safe
                migrations and fast queries &mdash; because they keep the
                numbers right.
              </p>

              <a
                href='https://nezexone.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2.5 rounded-lg px-3.5 h-10 text-sm text-zinc-200 bg-zinc-50/5 ring-1 ring-inset ring-zinc-50/10 transition-colors hover:bg-zinc-50/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400'
              >
                <span className='relative w-2 h-2 rounded-full bg-emerald-400'>
                  <span className='absolute inset-0 rounded-full bg-emerald-400 animate-ping motion-reduce:animate-none'></span>
                </span>
                See NezeX One live
                <span
                  className='material-symbols-rounded text-[18px] text-zinc-400'
                  aria-hidden='true'
                >
                  arrow_outward
                </span>
              </a>
            </div>

            <dl className='self-start lg:border-l lg:border-zinc-700/60 lg:pl-14'>
              {ledger.map(({ label, value }) => (
                <div
                  key={label}
                  className='flex items-baseline gap-3 py-2.5 first:pt-0 last:pb-0'
                >
                  <dt className="flex flex-1 items-baseline gap-3 text-sm md:text-base text-zinc-400 after:content-[''] after:flex-1 after:min-w-6 after:border-b after:border-dotted after:border-zinc-500 after:translate-y-[-0.3em]">
                    {label}
                  </dt>
                  <dd className='text-lg md:text-xl font-semibold text-zinc-50 tabular-nums whitespace-nowrap'>
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <p className='sr-only'>
            Full Stack Engineer in Dubai, UAE, available immediately. Open to
            Full Stack, Backend and Software Engineer roles in Dubai, Abu Dhabi,
            Sharjah and across the GCC. Also searchable as Rashid, Rashidc,
            Rashid C, Rashid_C, Rashid-C, and rashidc___.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
