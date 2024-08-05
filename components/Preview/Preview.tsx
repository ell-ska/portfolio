import { Navigation } from './Navigation'
import { Video } from './Video'

export const Preview = ({
  videoUrl,
  websiteUrl,
}: {
  videoUrl: string
  websiteUrl: string
}) => {
  return (
    <section className='mx-auto my-12 max-w-7xl md:my-24 md:px-20'>
      <Navigation link={websiteUrl} />
      <Video url={videoUrl} />
    </section>
  )
}
