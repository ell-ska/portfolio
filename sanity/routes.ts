import { client } from './lib/client'
import type { Slug } from 'sanity'
import type Project from './types/project'

export const getHomepageDescription = async () => {
  return await client.fetch('*[_type == "about"] {short_description}[0]')
}

export const getHomepageProjects = async () => {
  return await client.fetch(
    '*[_type == "project"] | order(orderRank) {_id, name, sneak_peek, slug, phone_images{main}, accent_color}',
  )
}

export const getProject = async (slug: string) => {
  return await client.fetch(
    `*[_type == "project" && slug.current == "${slug}"][0]`,
  )
}

export const getPreviewVideo = async (slug: string) => {
  return await client.fetch(
    `*[_type == "project" && slug.current == "${slug}"]{preview_video{asset->{path, url}}}[0]`,
  )
}

export const getNextProject = async (previous: Slug) => {
  const count = await client.fetch('count(*[_type == "project"])')
  const result: Pick<Project, 'name' | 'slug'>[] = await client.fetch(
    `*[_type == "project"] | order(orderRank) {name, slug}`,
  )

  const previousIndex = result.findIndex(
    project => project.slug.current === previous.current,
  )

  return previousIndex + 1 >= count ? result[0] : result[previousIndex + 1]
}

export const getAbout = async () => {
  return await client.fetch('*[_type == "about"][0]')
}
