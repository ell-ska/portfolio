if (typeof process.env.NEXT_PUBLIC_BASE_URL !== 'string') {
  throw new Error('NEXT_PUBLIC_BASE_URL is not defined')
}

declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_BASE_URL: string
  }
}
