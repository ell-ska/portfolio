import type About from '@/sanity/types/about'
import isBefore from 'date-fns/isBefore'

type EducationProps = Pick<About, 'education'>

const Education = ({ education }: EducationProps) => {
  return (
    <div className='space-y-12 lg:space-y-4'>
      {education.map(({ _key, title, duration, school }) => {
        const start = new Date(duration.start)
        const end = new Date(duration.end)

        return (
          <div key={_key} className='grid grid-cols-1 lg:grid-cols-3'>
            <span>
              {start.getFullYear()} -{' '}
              {isBefore(end, Date.now()) ? end.getFullYear() : 'now'}
            </span>
            <h3 className='font-bold lg:justify-self-center'>{title}</h3>
            <h4 className='lg:justify-self-end'>@ {school}</h4>
          </div>
        )
      })}
    </div>
  )
}

export default Education
