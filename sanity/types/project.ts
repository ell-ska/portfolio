import type { SanityDocument } from 'next-sanity'
import type { File, Image, PortableTextBlock, Slug } from 'sanity'

export type PhoneImages = {
  main: Image
  secondary?: Image
  third?: Image
}

export type Project = SanityDocument & {
  name: string
  sneak_peek: boolean
  slug: Slug
  accent_color: string
  description: PortableTextBlock
  links?: { live_project?: string; source_code?: string }
  phone_images: PhoneImages
  preview_video: File
}

export type HomepageProject = Pick<
  Project,
  'name' | 'sneak_peek' | 'slug' | 'accent_color' | 'phone_images' | '_id'
>
