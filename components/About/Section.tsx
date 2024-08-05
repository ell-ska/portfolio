'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

import { ContentSwitch } from './ContentSwitch'
import type { About } from '@/sanity/types/about'

const menuItems = ['about', 'skills', 'education', 'contact', 'testimonials']

export const Section = ({
  content,
  active,
}: {
  content: About
  active: string
}) => {
  const router = useRouter()

  active = active === 'me' ? 'about' : active

  return (
    <>
      <nav className='my-12 flex flex-row flex-wrap justify-center gap-x-8 gap-y-4 md:mb-16 md:mt-32'>
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() =>
              router.push(`/about/${item === 'about' ? 'me' : item}`)
            }
            className='relative capitalize'
          >
            {item}
            {item === active && (
              <motion.div
                layoutId='active'
                className='absolute -bottom-2 -left-4 -right-4 -top-2 -z-10 rounded-full bg-neutral-200'
              />
            )}
          </button>
        ))}
      </nav>
      <section className='w-full max-w-4xl text-lg'>
        <ContentSwitch activeSection={active} {...content} />
      </section>
    </>
  )
}
