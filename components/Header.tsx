'use client'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Logo } from './Icons'

const Header = ({ initiallyHidden = false }: { initiallyHidden?: boolean }) => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [80, 100], ['0', '100'])
  const paddingTop = useTransform(scrollY, [80, 100], ['', '1.5rem'])

  return (
    <motion.header
      className={`fixed z-50 flex w-full items-center justify-between bg-neutral-100 p-6 transition-all md:p-20 ${
        initiallyHidden ? 'md:py-6' : 'md:pb-6'
      }`}
      style={initiallyHidden ? { opacity } : { paddingTop }}>
      <Link href='/'>
        <Logo></Logo>
      </Link>
      <Link href='/'>Work</Link>
    </motion.header>
  )
}

export default Header
