import About from './About'
import Skills from './Skills'
import Education from './Education'
import Contact from './Contact'
import type { default as AboutProps } from '@/sanity/types/about'
import Testimonials from './Testimonials'

type ContentProps = { activeSection: string } & AboutProps

const ContentSwitch = ({
  activeSection,
  long_description,
  skills,
  education,
  contact,
  testimonials,
}: ContentProps) => {
  switch (activeSection) {
    case 'about':
      return long_description && <About long_description={long_description} />
    case 'skills':
      return skills && <Skills skills={skills} />
    case 'education':
      return education && <Education education={education} />
    case 'contact':
      return contact && <Contact contact={contact} />
    case 'testimonials':
      return testimonials && <Testimonials testimonials={testimonials} />
  }
}

export default ContentSwitch
