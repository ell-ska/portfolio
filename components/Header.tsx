'use client'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Logo } from './Icons'

const Header = ({ initiallyHidden = false }: { initiallyHidden?: boolean }) => {
  const { scrollY } = useScroll()

  const paddingTop = useTransform(scrollY, [80, 100], ['', '1.5rem'])
  const backgroundColor = useTransform(
    scrollY,
    [80, 100],
    ['#ffffff00', '#ffffff'],
  )

  return (
    <motion.header
      className={`fixed z-50 flex w-full items-center justify-between p-6 transition-all md:p-20 ${
        initiallyHidden ? 'md:py-6' : 'bg-neutral-100 md:pb-6'
      }`}
      style={initiallyHidden ? { backgroundColor } : { paddingTop }}>
      <Link href='/'>
        <Logo></Logo>
      </Link>
      <nav className='space-x-8'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='https://github.com/ell-ska' target='_blank' rel='noopener'>
          Github
        </Link>
      </nav>
    </motion.header>
  )
}

export default Header
