import type { Slug } from 'sanity'

import { client } from './lib/client'
import type { Project } from './types/project'

export const getHomepageDescription = async () => {
  return await client.fetch(
    '*[_type == "about"] {short_description}[0]',
    {},
    {
      next: {
        revalidate: 60 * 15, // cache for 15 minutes
      },
    },
  )
}

export const getHomepageProjects = async () => {
  return await client.fetch(
    '*[_type == "project"] | order(orderRank) {_id, name, sneak_peek, slug, phone_images{main}, accent_color}',
    {},
    {
      next: {
        revalidate: 60 * 15, // cache for 15 minutes
      },
    },
  )
}

export const getProject = async (slug: string) => {
  return await client.fetch(
    `*[_type == "project" && slug.current == "${slug}"][0]`,
    {},
    {
      next: {
        revalidate: 60 * 15, // cache for 15 minutes
      },
    },
  )
}

export const getOgProject = async (
  slug: string,
): Promise<Pick<Project, 'accent_color' | 'phone_images' | 'name'>> => {
  return await client.fetch(
    `*[_type == "project" && slug.current == "${slug}"]{phone_images, accent_color, name}[0]`,
    {},
    {
      next: {
        revalidate: 60 * 15, // cache for 15 minutes
      },
    },
  )
}

export const getHomepageOgProjects = async (): Promise<
  Pick<Project, '_id' | 'accent_color' | 'phone_images'>[]
> => {
  return await client.fetch(
    '*[_type == "project"] | order(orderRank) {_id, phone_images{main}, accent_color}[0...3]',
    {},
    {
      next: {
        revalidate: 60 * 15, // cache for 15 minutes
      },
    },
  )
}

export const getPreviewVideo = async (slug: string) => {
  return await client.fetch(
    `*[_type == "project" && slug.current == "${slug}"]{preview_video{asset->{path, url}}}[0]`,
    {},
    {
      next: {
        revalidate: 60 * 15, // cache for 15 minutes
      },
    },
  )
}

export const getNextProject = async (previous: Slug) => {
  const count = await client.fetch(
    'count(*[_type == "project"])',
    {},
    {
      next: {
        revalidate: 60 * 15, // cache for 15 minutes
      },
    },
  )
  const result: Pick<Project, 'name' | 'slug'>[] = await client.fetch(
    `*[_type == "project"] | order(orderRank) {name, slug}`,
    {},
    {
      next: {
        revalidate: 60 * 15, // cache for 15 minutes
      },
    },
  )

  const previousIndex = result.findIndex(
    (project) => project.slug.current === previous.current,
  )

  return previousIndex + 1 >= count ? result[0] : result[previousIndex + 1]
}

export const getAbout = async () => {
  return await client.fetch(
    '*[_type == "about"][0]',
    {},
    {
      next: {
        revalidate: 60 * 15, // cache for 15 minutes
      },
    },
  )
}
