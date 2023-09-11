import { PortableText } from '@portabletext/react'
import type About from '@/sanity/types/about'

type AboutProps = Pick<About, 'long_description'>

const About = ({ long_description }: AboutProps) => {
  return <PortableText value={long_description} />
}

export default About
