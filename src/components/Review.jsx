/**
 * @copyright 2024 RASHID_C
 * @license Apache-2.0
 */

import i1 from '@/images/people-.jpg'
import i2 from '@/images/ava.jpg'
import i3 from '@/images/people-3.jpg'
import i4 from '@/images/people-4.jpg'
import i5 from '@/images/people-5.jpg'
import i6 from '@/images/people-6.png'

import ReviewCard from './ReviewCard'
import ScrubSlide from './ScrubSlide'

const reviews = [
  {
    content:
      'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
    name: 'Rashid C',
    imgSrc: i1,
    company: 'PixelForge',
  },
  {
    content:
      'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
    name: 'Rayhan',
    imgSrc: i2,
    company: 'Brototype',
  },
  {
    content:
      'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
    name: 'Gopika G Nath',
    imgSrc: i3,
    company: 'Doctosmart',
  },
  {
    content:
      'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.',
    name: 'Reema Midhun',
    imgSrc: i4,
    company: 'Doctosmart',
  },
  {
    content:
      'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
    name: 'Nasif',
    imgSrc: i5,
    company: 'Careersteersman',
  },
  {
    content:
      'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
    name: 'Sidharth',
    imgSrc: i6,
    company: 'Doctosmart',
  },
]

const Review = () => {
  return (
    <section id='reviews' className='section overflow-hidden'>
      <div className='container'>
        <h2 className='headline-2 mb-8 reveal-up'>What our customers say</h2>
        <ScrubSlide>
          {reviews.map(({ content, name, imgSrc, company }) => (
            <ReviewCard
              key={name}
              content={content}
              name={name}
              imgSrc={imgSrc}
              company={company}
            />
          ))}
        </ScrubSlide>
      </div>
    </section>
  )
}

export default Review
