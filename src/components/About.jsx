/**
 * @copyright 2024 RASHID_C
 * @license Apache-2.0
 */

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Ledger from './Ledger'

const trackRecord = [
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

              <div className='flex flex-wrap items-center gap-x-5 gap-y-3'>
                <a
                  href='https://nezexone.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2.5 rounded-lg px-3.5 h-10 text-sm text-zinc-200 bg-zinc-50/5 ring-1 ring-inset ring-zinc-50/10 transition-colors hover:bg-zinc-50/10'
                >
                  <span className='relative w-2 h-2 rounded-full bg-emerald-400'>
                    <span className='absolute inset-0 rounded-full bg-emerald-400 animate-ping motion-reduce:animate-none'></span>
                  </span>
                  See NezeX One live
                  <ArrowUpRight
                    size={18}
                    className='text-zinc-400'
                    aria-hidden='true'
                  />
                </a>

                <Link
                  href='/projects/nezex-one'
                  className='text-sm text-sky-400 transition-colors hover:text-sky-300'
                >
                  How I built it
                </Link>
              </div>
            </div>

            <Ledger
              rows={trackRecord}
              classes='self-start lg:border-l lg:border-zinc-700/60 lg:pl-14'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
