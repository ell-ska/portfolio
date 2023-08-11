import Link from 'next/link'
import { MoveRight } from 'lucide-react'
import Project from '@/sanity/types/project'

const NextProject = ({ name, slug }: Pick<Project, 'name' | 'slug'>) => {
  return (
    <section className='mb-8 mt-12 px-6 md:px-20'>
      <span>Next project</span>
      <Link
        href={`/work/${slug.current}`}
        className='flex items-center justify-between gap-4 md:justify-normal'>
        <h3 className='text-3xl font-bold'>{name}</h3>
        <MoveRight />
      </Link>
    </section>
  )
}

export default NextProject
