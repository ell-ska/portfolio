export const formatHexColor = (input: string) => {
  return input.slice(0, 1) === '#'
    ? input.toLowerCase()
    : '#' + input.toLowerCase()
}
