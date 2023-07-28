import Link from 'next/link'
import { Logo } from '@/components/Icons'

export default function Home() {
  return (
    <main className='flex h-[100svh] flex-col items-center justify-center'>
      <Logo className='max-w-full px-4' />
      <div className='absolute bottom-8 text-center'>
        <h3 className='mb-4'>
          This page is currently under construction. <br /> Come back soon!
        </h3>
        <Link
          href='https://github.com/ell-ska'
          className='inline-block rounded-full bg-blue px-8 py-4 font-bold text-neutral'>
          Github
        </Link>
      </div>
    </main>
  )
}
