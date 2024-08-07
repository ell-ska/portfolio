export const Video = ({ url }: { url: string }) => {
  return (
    <div className='overflow-hidden rounded-b-md border-t-0 border-neutral-300 md:rounded-b-xl md:border'>
      <video src={url} playsInline autoPlay muted loop />
    </div>
  )
}
