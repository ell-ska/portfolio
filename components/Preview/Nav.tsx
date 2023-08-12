import { ChevronLeft, ChevronRight, LayoutGrid, Lock } from 'lucide-react'

const Nav = ({ link }: { link: string }) => {
  return (
    <div className='grid grid-cols-[3rem,1fr,3rem] items-center border-y border-neutral-300 px-4 py-2 text-neutral-400 md:grid-cols-[7rem,1fr,7rem] md:gap-8 md:rounded-t-xl md:border'>
      <div className='flex items-center gap-4'>
        <div className='flex gap-[6px]'>
          <div className='h-[10px] w-[10px] rounded-full bg-[#DC7265]'></div>
          <div className='h-[10px] w-[10px] rounded-full bg-[#ECC164]'></div>
          <div className='h-[10px] w-[10px] rounded-full bg-[#7BC262]'></div>
        </div>
        <div className='hidden gap-[6px] md:flex'>
          <ChevronLeft />
          <ChevronRight />
        </div>
      </div>
      <div className='flex w-4/5 items-center justify-center gap-2 justify-self-center rounded-md border border-neutral-300 bg-neutral-200 py-[6px]'>
        <Lock size={12} />
        <span className='text-xs text-neutral-700'>{link}</span>
      </div>
      <div className='hidden justify-self-end md:block'>
        <LayoutGrid size={16} />
      </div>
    </div>
  )
}

export default Nav
