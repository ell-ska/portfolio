'use client'
import { useState } from 'react'
import Link from 'next/link'
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion'
import { Logo } from './Icons'

const Header = ({ initiallyHidden = false }: { initiallyHidden?: boolean }) => {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(initiallyHidden)

  const paddingTop = useTransform(scrollY, [80, 100], ['', '1.5rem'])

  useMotionValueEvent(scrollY, 'change', latest => {
    const previous = scrollY.getPrevious()
    if (latest > previous) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  return (
    <motion.header
      variants={{
        hidden: { y: '-100%' },
        visible: { y: 0 },
      }}
      animate={initiallyHidden && (hidden ? 'hidden' : 'visible')}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`fixed z-50 flex w-full items-center justify-between bg-neutral-100 p-6 transition-all md:p-20 ${
        initiallyHidden ? '-translate-y-full md:py-6' : 'md:pb-6'
      }`}
      style={initiallyHidden ? {} : { paddingTop }}>
      <Link href='/'>
        <Logo></Logo>
      </Link>
      <nav className='space-x-8'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
      </nav>
    </motion.header>
  )
}

export default Header
