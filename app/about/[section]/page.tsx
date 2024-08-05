import type { Metadata } from 'next'

import { getAbout } from '@/sanity/routes'
import { Header } from '@/components/Header'
import { Section } from '@/components/About/Section'

export const metadata: Metadata = {
  title: 'about me',
  description: "hi! i'm Ella Skagerström. nice to meet you",
}

export default async function AboutSectionPage({
  params,
}: {
  params: { section: string }
}) {
  const content = await getAbout()

  return (
    <>
      <Header />
      <main className='flex min-h-screen flex-col items-center px-6 pb-6 pt-14 md:px-20 md:pb-20 md:pt-28'>
        <Section content={content} active={params.section} />
      </main>
    </>
  )
}
