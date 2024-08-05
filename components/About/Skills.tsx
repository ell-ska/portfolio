import Link from 'next/link'
import type { CSSProperties } from 'react'

import { DynamicIcon } from '../Icons'
import type { About } from '@/sanity/types/about'

export const Skills = ({ skills }: Pick<About, 'skills'>) => {
  return (
    <div className='flex flex-wrap justify-center gap-8'>
      {skills.map(({ name, link, icon, color, _key }) => (
        <Link
          href={link}
          key={_key}
          className='flex items-center gap-2 hover:text-[var(--logo-color)]'
          style={{ '--logo-color': color } as CSSProperties}
          target='_blank'
          rel='noopener noreferrer'
        >
          <span>{name}</span>
          <DynamicIcon name={icon} />
        </Link>
      ))}
    </div>
  )
}
