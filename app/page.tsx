import { getHomepageDescription, getHomepageProjects } from '@/sanity/routes'
import Header from '@/components/Header'
import ProjectCard from '@/components/ProjectCard'
import type Project from '@/sanity/types/project'

const Home = async () => {
  const { short_description } = await getHomepageDescription()
  const projects: Project[] = await getHomepageProjects()

  return (
    <main className='flex flex-col p-6 md:p-20'>
      <Header></Header>
      <h1 className='mt-16 text-4xl md:mt-32 md:text-6xl md:leading-tight'>
        {short_description}
      </h1>
      <section className='mt-16 flex flex-wrap gap-12 md:mt-24 md:gap-2'>
        {projects.map(project => (
          <ProjectCard key={project._id} {...project} />
        ))}
      </section>
    </main>
  )
}

export default Home
