import { Outfit } from 'next/font/google'
import type { Metadata } from 'next'

import './globals.css'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: {
    default: 'ellska - fullstack developer',
    template: '%s | ellska',
  },
  description:
    'ella skagerström is a fullstack developer with a passion for building modern and beautiful websites',
  openGraph: {
    title: 'ellska',
    description:
      'a fullstack developer with a passion for building modern and beautiful websites',
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: 'ellska.dev',
    type: 'website',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`${outfit.variable} min-h-screen font-sans text-neutral`}
      >
        {children}
      </body>
    </html>
  )
}
