import { MetadataRoute } from 'next'

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: 'https://ellska.dev',
    },
  ]
}

export default sitemap
