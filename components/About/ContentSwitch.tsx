import { About } from './About'
import { Skills } from './Skills'
import { Education } from './Education'
import { Contact } from './Contact'
import { Testimonials } from './Testimonials'
import type { About as AboutData } from '@/sanity/types/about'

export const ContentSwitch = ({
  activeSection,
  long_description,
  skills,
  education,
  contact,
  testimonials,
}: { activeSection: string } & AboutData) => {
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
