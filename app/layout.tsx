import { Outfit } from 'next/font/google'
import ogImage from '@/public/og.jpg'
import './globals.css'
import type { Metadata } from 'next'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: {
    default: 'ellska',
    template: '%s | ellska',
  },
  description:
    'a frontend developer with a passion for building modern and beautiful websites',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'ellska',
    description:
      'a frontend developer with a passion for building modern and beautiful websites',
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: 'ellska.dev',
    images: [
      {
        url: ogImage.src,
        width: 2800,
        height: 1600,
      },
    ],
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
        className={`${outfit.variable} min-h-screen font-sans text-neutral`}>
        {children}
      </body>
    </html>
  )
}
