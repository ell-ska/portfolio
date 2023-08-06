import type { SanityDocument } from 'next-sanity'
import type { Image, PortableTextBlock, Slug } from 'sanity'

interface Project extends SanityDocument {
  name: string
  slug: Slug
  accent_color: string
  description: PortableTextBlock
  links?: { live_project?: string; source_code?: string }
  phone_images: { main: Image; secondary?: Image; third?: Image }
}

export default Project
