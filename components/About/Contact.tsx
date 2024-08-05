import Link from 'next/link'

import { About } from '@/sanity/types/about'

export const Contact = ({ contact }: Pick<About, 'contact'>) => {
  return (
    <div className='flex flex-wrap justify-center gap-20'>
      {contact.map(({ _key, name, link }) => (
        <Link href={link} key={_key} target='_blank' rel='noopener noreferrer'>
          {name}
        </Link>
      ))}
    </div>
  )
}
