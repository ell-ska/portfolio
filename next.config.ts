import type { NextConfig } from 'next'

export default {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/9bvrpa1x/production/**',
      },
    ],
  },
} satisfies NextConfig
