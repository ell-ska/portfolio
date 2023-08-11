import { Outfit } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: 'ellska',
  description: 'Frontend Developer',
  icons: {
    icon: '/favicon.svg',
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
