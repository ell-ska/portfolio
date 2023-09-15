import { useEffect, useState } from 'react'
import { Flower1, Flower2, Flower3 } from '../Icons'
import { motion } from 'framer-motion'

const Background = ({ activeSection }: { activeSection: string }) => {
  const [change, setChange] = useState(false)

  useEffect(() => {
    setChange(prev => !prev)
  }, [activeSection])

  return (
    <div className='absolute inset-0 -z-10'>
      <motion.div
        variants={{
          first: { top: '10rem', left: '15rem' },
          second: { top: '15rem', left: '8rem', rotate: '15deg' },
        }}
        animate={change ? 'first' : 'second'}
        transition={{ duration: 0.5, ease: 'backInOut' }}
        className='absolute'>
        <Flower1 />
      </motion.div>
      <motion.div className='absolute bottom-20 right-32'>
        <Flower3 />
      </motion.div>
    </div>
  )
}

export default Background
