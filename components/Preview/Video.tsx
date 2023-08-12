const Video = ({ url }: { url: string }) => {
  return (
    <div className='overflow-hidden rounded-b-md md:rounded-b-xl'>
      <video src={url} playsInline autoPlay muted loop></video>
    </div>
  )
}

export default Video
