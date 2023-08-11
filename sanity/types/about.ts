import type { SanityDocument } from 'next-sanity'
import type { PortableTextBlock } from 'sanity'

interface About extends SanityDocument {
  short_description: string
  long_description: PortableTextBlock
}

export default About
