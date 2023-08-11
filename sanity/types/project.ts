import type { SanityDocument } from 'next-sanity'
import type { Image, PortableTextBlock, Slug } from 'sanity'

type PhoneImages = {
  main: Image
  secondary?: Image
  third?: Image
}

interface Project extends SanityDocument {
  name: string
  slug: Slug
  accent_color: string
  description: PortableTextBlock
  links?: { live_project?: string; source_code?: string }
  phone_images: PhoneImages
}

type HomepageProject = Pick<
  Project,
  'name' | 'slug' | 'accent_color' | 'phone_images' | '_id'
>

export type { PhoneImages, HomepageProject }
export default Project
