import { PortableText } from '@portabletext/react'

import type { About as AboutData } from '@/sanity/types/about'

export const About = ({
  long_description,
}: Pick<AboutData, 'long_description'>) => {
  return <PortableText value={long_description} />
}
