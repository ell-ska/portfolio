import Link from 'next/link'
import { Logo } from './Icons'

const Header = () => {
  return (
    <header className='flex items-center justify-between'>
      <Link href='/'>
        <Logo></Logo>
      </Link>
      <Link href='/'>Work</Link>
    </header>
  )
}

export default Header
