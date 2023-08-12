import Nav from './Nav'
import Video from './Video'

const Preview = ({
  videoUrl,
  websiteUrl,
}: {
  videoUrl: string
  websiteUrl: string
}) => {
  return (
    <section className='mx-auto my-12 max-w-7xl md:my-24 md:px-20'>
      <Nav link={websiteUrl} />
      <Video url={videoUrl} />
    </section>
  )
}

export default Preview
