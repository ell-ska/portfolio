import About from '@/sanity/types/about'
import Link from 'next/link'

type ContactProps = Pick<About, 'contact'>

const Contact = ({ contact }: ContactProps) => {
  return (
    <div className='flex flex-wrap justify-center gap-20'>
      {contact.map(({ _key, name, link }) => (
        <Link href={link} key={_key}>
          {name}
        </Link>
      ))}
    </div>
  )
}

export default Contact
