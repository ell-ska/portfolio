import { client } from './lib/client'

const getHomepageDescription = async () => {
  return await client.fetch('*[_type == "about"]{short_description}[0]')
}

const getHomepageProjects = async () => {
  return await client.fetch(
    '*[_type == "project"]|order(orderRank){_id, name, slug, phone_images{main}, accent_color}',
  )
}

const getProject = async (slug: string) => {
  return await client.fetch(
    `*[_type == "project" && slug.current == "${slug}"][0]`,
  )
}

export { getHomepageDescription, getHomepageProjects, getProject }
