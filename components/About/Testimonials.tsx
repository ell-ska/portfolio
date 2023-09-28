import { PortableText } from '@portabletext/react'
import type About from '@/sanity/types/about'

type TestimonialsProps = Pick<About, 'testimonials'>

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  console.log(testimonials)
  return (
    <div className='flex flex-wrap justify-center gap-8'>
      {testimonials.map(({ testimonial, name, position, _key }) => (
        <div key={_key}>
          <div className='max-w-[26rem] rounded-2xl bg-neutral-200 p-4'>
            <PortableText value={testimonial} />
          </div>
          <div className='flex gap-4'>
            <div className='flex flex-col pl-4 pt-2 text-xs'>
              <span className='font-semibold'>{name}</span>
              <span>{position}</span>
            </div>
            <div>
              <svg
                width='28'
                height='20'
                viewBox='0 0 28 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M0 6V0H6H13.7781H28L18.0758 10.1869L14 14.3705L10.2977 18.1708C6.63221 21.9333 0.315438 19.4924 0.0113945 14.3705H0V13.984V6Z'
                  fill='#F2F5F9'
                />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Testimonials
