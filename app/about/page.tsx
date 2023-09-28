import Header from '@/components/Header'
import Section from '@/components/About/Section'
import { getAbout } from '@/sanity/routes'

const About = async () => {
  const content = await getAbout()
  console.log(content)

  return (
    <>
      <Header />
      <main className='flex min-h-screen flex-col items-center px-6 pb-6 pt-14 md:px-20 md:pb-20 md:pt-28'>
        <Section content={content} />
      </main>
    </>
  )
}

export default About
