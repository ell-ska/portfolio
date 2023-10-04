import Image from 'next/image'
import Link from 'next/link'
import { MoveRight } from 'lucide-react'
import { urlForImage } from '@/sanity/lib/image'
import formatHexColor from '@/utils/formatHexColor'
import type { HomepageProject } from '@/sanity/types/project'

const ProjectCard = ({
  name,
  sneak_peek,
  slug,
  accent_color,
  phone_images,
}: HomepageProject) => {
  return (
    <Link
      href={`/work/${slug.current}`}
      className='group relative flex max-h-[calc(100vh-2rem)] min-w-[20rem] flex-1 flex-col items-center justify-center gap-4'>
      <div
        className='grid w-full place-items-center'
        style={{ backgroundColor: formatHexColor(accent_color) }}>
        <Image
          className={`p-8 ${sneak_peek && 'blur-sm'}`}
          src={urlForImage(phone_images.main).url()}
          alt=''
          height={662}
          width={320}></Image>
        <div className='absolute inset-0 bg-neutral-100 opacity-0 md:group-hover:opacity-80'></div>
      </div>
      <div className='flex w-full items-center justify-between md:absolute md:justify-center md:opacity-0 md:group-hover:opacity-100'>
        <div className='md:text-center'>
          {sneak_peek && (
            <h4 className='font-bold text-neutral-700'>sneak peek</h4>
          )}
          <h3 className='text-3xl font-bold md:text-4xl'>{name}</h3>
        </div>
        <MoveRight className='md:hidden' />
      </div>
    </Link>
  )
}

export default ProjectCard
