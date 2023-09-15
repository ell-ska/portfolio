import type { SanityDocument } from 'next-sanity'
import type { PortableTextBlock } from 'sanity'

interface About extends SanityDocument {
  short_description: string
  long_description: PortableTextBlock
  skills: {
    name: string
    link: string
    icon: string
    color: string | undefined
    _key: string
  }[]
  education: {
    title: string
    school: string
    duration: { start: string; end: string }
    _key: string
  }[]
  contact: { name: string; link: string; _key: string }[]
  testimonials: {
    testimonial: PortableTextBlock
    name: string
    position: string
    _key: string
  }[]
}

export default About
