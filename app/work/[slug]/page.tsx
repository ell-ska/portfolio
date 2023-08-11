import { getNextProject, getProject } from '@/sanity/routes'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import ProjectDesc from '@/components/ProjectDesc'
import NextProject from '@/components/NextProject'
import type Project from '@/sanity/types/project'

const Work = async ({ params: { slug } }: { params: { slug: string } }) => {
  const project: Project = await getProject(slug)
  const nextProject: Pick<Project, 'name' | 'slug'> = await getNextProject(
    project.slug,
  )

  return (
    <>
      <Header initiallyHidden={true} />
      <main>
        <Banner
          images={project.phone_images}
          accentColor={project.accent_color}
        />
        <ProjectDesc {...project} />
        <NextProject {...nextProject} />
      </main>
    </>
  )
}

export default Work
