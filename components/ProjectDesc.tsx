import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { ArrowUpRight } from 'lucide-react'
import formatHexColor from '@/utils/formatHexColor'
import type { Project } from '@/sanity/types/project'

const ProjectDesc = ({
  name,
  description,
  links,
  accent_color,
  sneak_peek,
}: Project) => {
  return (
    <section className='mt-12 flex flex-col justify-between gap-8 px-6 md:mt-16 md:flex-row md:px-20'>
      <div>
        {sneak_peek && (
          <h3 className='font-bold text-neutral-700'>sneak peek</h3>
        )}
        <h2 className='whitespace-nowrap text-4xl font-bold'>{name}</h2>
      </div>
      <div className='prose prose-lg max-w-4xl'>
        <PortableText value={description} />
        <div className='not-prose mt-8 flex gap-12 font-bold'>
          {links?.live_project && (
            <Link
              href={links?.live_project}
              className='flex items-center gap-2'
              target='_blank'
              rel='noopener noreferrer'
            >
              <ArrowUpRight className='inline' />
              <span>Live project</span>
            </Link>
          )}
          {links?.source_code && (
            <Link
              href={links?.source_code}
              className='flex items-center gap-2'
              style={{ color: formatHexColor(accent_color) }}
              target='_blank'
              rel='noopener noreferrer'
            >
              <ArrowUpRight className='inline' />
              <span>Source code</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

export default ProjectDesc
