import { getHomepageDescription, getHomepageProjects } from '@/sanity/routes'
import { Header } from '@/components/Header'
import { ProjectCard } from '@/components/ProjectCard'
import type { HomepageProject } from '@/sanity/types/project'

export default async function HomePage() {
  const { short_description } = await getHomepageDescription()
  const projects: HomepageProject[] = await getHomepageProjects()

  return (
    <>
      <Header />
      <main className='flex flex-col px-6 pb-6 pt-14 md:px-20 md:pb-20 md:pt-28'>
        <h1 className='mt-16 text-4xl md:mt-32 md:text-6xl md:leading-tight'>
          {short_description}
        </h1>
        <section className='mt-16 flex flex-wrap gap-12 md:mt-24 md:gap-2'>
          {projects.map((project) => (
            <ProjectCard key={project._id} {...project} />
          ))}
        </section>
      </main>
    </>
  )
}
