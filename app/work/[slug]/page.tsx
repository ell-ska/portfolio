import { getNextProject, getPreviewVideo, getProject } from '@/sanity/routes'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import ProjectDesc from '@/components/ProjectDesc'
import Preview from '@/components/Preview/Preview'
import NextProject from '@/components/NextProject'
import type Project from '@/sanity/types/project'

const Work = async ({ params: { slug } }: { params: { slug: string } }) => {
  const project: Project = await getProject(slug)
  const { preview_video } = await getPreviewVideo(slug)
  const nextProject: Pick<Project, 'name' | 'slug'> = await getNextProject(
    project.slug,
  )

  const prettyUrl = project.links?.live_project
    ? new URL(project.links?.live_project).host
    : null

  return (
    <>
      <Header initiallyHidden={true} />
      <main>
        <Banner
          images={project.phone_images}
          accentColor={project.accent_color}
        />
        <ProjectDesc {...project} />
        {preview_video && (
          <Preview
            videoUrl={preview_video.asset.url}
            websiteUrl={prettyUrl || `${project.slug.current}.com`}
          />
        )}
        <NextProject {...nextProject} />
      </main>
    </>
  )
}

export default Work
