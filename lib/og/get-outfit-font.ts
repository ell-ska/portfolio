export const getOutfitRegularFont = async () => {
  const response = await fetch(
    new URL('/assets/outfit-regular.ttf', import.meta.url),
  )
  return await response.arrayBuffer()
}

export const getOutfitBoldFont = async () => {
  const response = await fetch(
    new URL('/assets/outfit-bold.ttf', import.meta.url),
  )
  return await response.arrayBuffer()
}
