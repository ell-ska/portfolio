import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
import formatHexColor from '@/utils/formatHexColor'
import type { PhoneImages } from '@/sanity/types/project'

const Banner = ({
  images,
  accentColor,
  sneakPeek,
}: {
  images: PhoneImages
  accentColor: string
  sneakPeek: boolean
}) => {
  const imageClassName = `object-contain ${
    sneakPeek && 'blur-sm hover:blur-none transition'
  }`
  return (
    <section
      className='flex h-[75vh] items-center justify-center overflow-hidden'
      style={{ backgroundColor: formatHexColor(accentColor) }}>
      <div className='relative h-[calc(100%-4rem)] w-64 md:h-[calc(100%+4rem)] md:w-80'>
        {images.secondary && (
          <div className='absolute left-0 top-8 h-full w-full -translate-x-full md:-left-20 md:top-20'>
            <Image
              className={imageClassName}
              src={urlForImage(images.secondary).url()}
              alt=''
              fill></Image>
          </div>
        )}
        <Image
          className={imageClassName}
          src={urlForImage(images.main).url()}
          alt=''
          fill></Image>
        {images.third && (
          <div className='absolute -top-8 right-0 h-full w-full translate-x-full md:-right-20 md:-top-20'>
            <Image
              className={imageClassName}
              src={urlForImage(images.third).url()}
              alt=''
              fill></Image>
          </div>
        )}
      </div>
    </section>
  )
}

export default Banner
