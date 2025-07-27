import type { NextConfig } from 'next'

export default {
  images: {
    remotePatterns: [
      // new URL('https://cdn.sanity.io/images/9bvrpa1x/production/**'),
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/9bvrpa1x/production/**',
      },
    ],
  },
} satisfies NextConfig
