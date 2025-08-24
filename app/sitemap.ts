import { MetadataRoute } from 'next'

import { client } from '@/sanity/lib/client'
import type { Project } from '@/sanity/types/project'

const getSitemapProjects = async (): Promise<
  Pick<Project, 'slug' | '_updatedAt'>[]
> => {
  return await client.fetch('*[_type == "project"] {slug, _updatedAt}')
}

const getSitemapAboutUpdatedAt = async (): Promise<string> => {
  return (await client.fetch('*[_type == "about"] {_updatedAt}[0]'))._updatedAt
}

const about = [
  { path: '/me', priority: 0.8 },
  { path: '/skills', priority: 0.8 },
  { path: '/education', priority: 0.7 },
  { path: '/contact', priority: 0.6 },
  { path: '/testimonials', priority: 0.6 },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const aboutUpdatedAt = await getSitemapAboutUpdatedAt()
  const projects = await getSitemapProjects()

  const projectDetails = projects.map((project) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/work/${project.slug.current}`,
    lastModified: project._updatedAt,
    priority: 0.9,
  }))

  const aboutDetails = about.map(({ path, priority }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/about${path}`,
    lastModified: aboutUpdatedAt,
    priority,
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
      priority: 1.0,
    },
    ...projectDetails,
    ...aboutDetails,
  ]
}
