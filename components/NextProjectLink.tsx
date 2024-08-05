import Link from 'next/link'
import { MoveRight } from 'lucide-react'

import type { Project } from '@/sanity/types/project'

export const NextProjectLink = ({
  name,
  slug,
}: Pick<Project, 'name' | 'slug'>) => {
  return (
    <section className='mt-12 px-6 pb-8 md:px-20'>
      <span>Next project</span>
      <Link
        href={`/work/${slug.current}`}
        className='flex items-center justify-between gap-4 md:justify-normal'
      >
        <h3 className='text-3xl font-bold'>{name}</h3>
        <MoveRight />
      </Link>
    </section>
  )
}
