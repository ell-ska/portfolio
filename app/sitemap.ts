import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'
import type Project from '@/sanity/types/project'

const getSitemapProjects = async (): Promise<
  Pick<Project, 'slug' | '_updatedAt'>[]
> => {
  return await client.fetch('*[_type == "project"] {slug, _updatedAt}')
}

const getSitemapAboutUpdatedAt = async () => {
  return (await client.fetch('*[_type == "about"] {_updatedAt}[0]'))._updatedAt
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getSitemapProjects()
  const projectDetails = projects.map(project => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/work/${project.slug.current}`,
    lastModified: project._updatedAt,
  }))

  const lastUpdatedProjectDate = projects.reduce(
    (previousProject, currentProject) =>
      currentProject._updatedAt > previousProject._updatedAt
        ? currentProject
        : previousProject,
    projects[0],
  )._updatedAt

  return [
    {
      url: process.env.NEXT_PUBLIC_BASE_URL,
      lastModified: lastUpdatedProjectDate,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      lastModified: await getSitemapAboutUpdatedAt(),
    },
    ...projectDetails,
  ]
}
