import { client } from './lib/client'

const getHomepageDescription = async () => {
  return await client.fetch('*[_type == "about"]{short_description}[0]')
}

const getHomepageProjects = async () => {
  return await client.fetch(
    '*[_type == "project"]|order(orderRank){_id, name, slug, phone_images{main}, accent_color}',
  )
}

export { getHomepageDescription, getHomepageProjects }
