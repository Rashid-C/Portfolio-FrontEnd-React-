/**
 * @copyright 2024 RASHID_C
 * @license Apache-2.0
 */

import { ButtonPrimary, ButtonOutline } from './components/Button'
import profile from '../src/images/profile.png'

/**
 * Components
 */

const Hero = () => {
  return (
    <section id='home' className='pt-28 lg:pt-36'>
      <div className='container lg:grid lg:grid-cols-2 items-center lg:gap-10'>
        <div>
          <div className='flex items-center gap-3'>
            <figure className='img-box w-9 h-9 rounded-lg'>
              <img
                src={profile}
                className='img-cover'
                alt='RASHID_C'
                width={40}
                height={40}
              />
            </figure>

            <div className='flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide'>
              <span className='relative w-2 h-2 rounded-full bg-emerald-400'>
                <span className='absolute inset-0 rounded-full bg-emerald-400 animate-ping'></span>
              </span>
              Available for work
            </div>
          </div>
          <h1 className='headeline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10'>
            Building Scalable Modern Websites for the Future
          </h1>

          <div className='lg:hidden mb-8'>
            <figure className='w-full max-w-[320px] mx-auto bg-gradient-to-t from-sky-400 via-sky-400 to-65% rounded-[40px] overflow-hidden ring-2 ring-sky-300/30 shadow-[0_0_40px_rgba(56,189,248,0.35)]'>
              <img
                className='w-full'
                src={profile}
                alt='RASHID_C'
                width={656}
                height={800}
              />
            </figure>
          </div>

          <div className='flex items-center gap-3'>
            <ButtonPrimary label='Download CV' icon='download' />
            <ButtonOutline
              href='#about'
              label='Scroll down'
              icon='arrow_downward'
            />
          </div>
        </div>

        <div className='hidden lg:block'>
          <figure className='w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-sky-400 to-65% rounded-[60px] overflow-hidden ring-2 ring-sky-300/20 shadow-[0_0_48px_rgba(56,189,248,0.28)]'>
            <img
              className='w-full'
              src={profile}
              alt='RASHID_C'
              width={656}
              height={800}
            />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Hero


