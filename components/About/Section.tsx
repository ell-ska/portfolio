'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import ContentSwitch from './ContentSwitch'
import Background from './Background'
import About from '@/sanity/types/about'

const menuItems = ['about', 'skills', 'education', 'contact', 'testimonials']

const Section = ({ content }: { content: About }) => {
  const [activeSection, setActiveSection] = useState('about')

  return (
    <>
      <nav className='mb-16 mt-32 flex gap-8'>
        {menuItems.map(item => (
          <button
            key={item}
            onClick={() => setActiveSection(item)}
            className='relative capitalize'>
            {item}
            {item === activeSection && (
              <motion.div
                layoutId='active'
                className='absolute -bottom-2 -left-4 -right-4 -top-2 -z-10 rounded-full bg-neutral-200'
              />
            )}
          </button>
        ))}
      </nav>
      <section className='w-full max-w-4xl text-lg'>
        <ContentSwitch activeSection={activeSection} {...content} />
      </section>
      <Background activeSection={activeSection} />
    </>
  )
}

export default Section
