import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

import { client } from './client'

const builder = createImageUrlBuilder(client)

export const urlForImage = (source: Image) => {
  return builder.image(source).auto('format').fit('max')
}
