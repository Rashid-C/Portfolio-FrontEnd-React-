import Image from 'next/image'
import { Star } from 'lucide-react'

const STAR_COUNT = 5

const ReviewCard = ({ content, name, imgSrc, company }) => {
  return (
    <div className='bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]'>
      <div className='flex items-center gap-1 mb-3' role='img' aria-label='5 out of 5 stars'>
        {Array.from({ length: STAR_COUNT }, (_, index) => (
          <Star
            key={index}
            size={18}
            className='text-yellow-300 fill-yellow-300'
            aria-hidden='true'
          />
        ))}
      </div>

      <p className='text-zinc-400 mb-8'>{content}</p>

      <div className='flex items-center gap-2 mt-auto'>
        <figure className='w-12 h-12 rounded-lg overflow-hidden shrink-0'>
          <Image
            src={imgSrc}
            alt=''
            sizes='48px'
            className='w-full h-full object-cover'
          />
        </figure>

        <div>
          <p>{name}</p>
          <p className='text-xs text-zinc-400 tracking-wider'>{company}</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
