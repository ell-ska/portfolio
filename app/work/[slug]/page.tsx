import { getProject } from '@/sanity/routes'
import Banner from '@/components/Banner'
import type Project from '@/sanity/types/project'

const Work = async ({ params: { slug } }: { params: { slug: string } }) => {
  const project: Project = await getProject(slug)

  return (
    <Banner images={project.phone_images} accentColor={project.accent_color} />
  )
}

export default Work
