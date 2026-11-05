/**
 * @copyright 2024 RASHID_C
 * @license Apache-2.0
 */

import Image from 'next/image'
import { ArrowDown, Download } from 'lucide-react'
import { ButtonOutline, DownloadCvButton } from './Button'
import profile from '@/images/profile.png'

const Hero = () => {
  return (
    <section id='home' className='pt-28 lg:pt-36'>
      {/* One photo, placed by grid: between the text and buttons on phones, in its own column on desktop. */}
      <div className='container grid lg:grid-cols-2 lg:grid-rows-[1fr_auto_auto_1fr] lg:gap-x-10'>
        <div className='lg:col-start-1 lg:row-start-2'>
          <div className='flex items-center gap-3'>
            <figure className='img-box w-9 h-9 rounded-lg shrink-0'>
              <Image src={profile} alt='' sizes='36px' className='img-cover' />
            </figure>

            <div className='flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide'>
              <span className='relative w-2 h-2 rounded-full bg-emerald-400 shrink-0'>
                <span className='absolute inset-0 rounded-full bg-emerald-400 animate-ping motion-reduce:animate-none'></span>
              </span>
              Available immediately &middot; Dubai,&nbsp;UAE
            </div>
          </div>

          <h1 className='headeline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-4'>
            Engineering Scalable Full-Stack Systems
          </h1>

          <p className='text-zinc-400 md:text-lg max-w-[42ch] mb-8 lg:mb-10'>
            Rashid C &mdash; Full Stack Engineer building ERP, SaaS and
            e-commerce systems with Next.js, Node.js, Django and PostgreSQL.
          </p>
        </div>

        <figure className='w-full max-w-[320px] mx-auto mb-8 bg-gradient-to-t from-sky-400 via-sky-400 to-65% rounded-[40px] overflow-hidden ring-2 ring-sky-300/30 shadow-[0_0_40px_rgba(56,189,248,0.35)] lg:col-start-2 lg:row-start-1 lg:row-span-4 lg:max-w-[480px] lg:mb-0 lg:ml-auto lg:mr-0 lg:self-center lg:rounded-[60px] lg:ring-sky-300/20 lg:shadow-[0_0_48px_rgba(56,189,248,0.28)]'>
          <Image
            src={profile}
            alt='Rashid C, Full Stack Engineer in Dubai, UAE'
            sizes='(min-width: 1024px) 480px, 320px'
            preload
            className='w-full'
          />
        </figure>

        <div className='flex items-center gap-3 lg:col-start-1 lg:row-start-3'>
          <DownloadCvButton icon={Download} />
          <ButtonOutline href='/#about' label='Scroll down' icon={ArrowDown} />
        </div>
      </div>
    </section>
  )
}

export default Hero
