import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { ArrowUpRight, MoveRight } from 'lucide-react'
import { getNextProject, getProject } from '@/sanity/routes'
import Banner from '@/components/Banner'
import type Project from '@/sanity/types/project'

const Work = async ({ params: { slug } }: { params: { slug: string } }) => {
  const project: Project = await getProject(slug)
  const nextProject: Pick<Project, 'name' | 'slug'> = await getNextProject(
    project.slug,
  )

  return (
    <main>
      <Banner
        images={project.phone_images}
        accentColor={project.accent_color}
      />
      <section className='mt-12 grid grid-cols-12 gap-8 px-6 md:mt-16 md:px-20'>
        <h2 className='col-span-full text-4xl font-bold md:col-span-3'>
          {project.name}
        </h2>
        <div className='prose prose-lg col-span-full max-w-none md:col-span-9'>
          <PortableText value={project.description} />
          <div className='not-prose mt-8 flex gap-12 font-bold'>
            {project.links?.live_project && (
              <Link
                href={project.links?.live_project}
                className='flex items-center gap-2'>
                <ArrowUpRight className='inline' />
                <span>Live project</span>
              </Link>
            )}
            {project.links?.source_code && (
              <Link
                href={project.links?.source_code}
                className='flex items-center gap-2'
                style={{ color: project.accent_color }}>
                <ArrowUpRight className='inline' />
                <span>Source code</span>
              </Link>
            )}
          </div>
        </div>
      </section>
      <section className='mb-8 mt-12 px-6 md:px-20'>
        <span>Next project</span>
        <Link
          href={`/work/${nextProject.slug.current}`}
          className='flex items-center justify-between gap-4 md:justify-normal'>
          <h3 className='text-3xl font-bold'>{nextProject.name}</h3>
          <MoveRight />
        </Link>
      </section>
    </main>
  )
}

export default Work
