import type { Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'
import { cn } from '@/lib/utils'
import { ClerkProvider } from '@clerk/nextjs'

import './globals.css'


const IBMPLex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex',
})

export const metadata: Metadata = {
  title: 'Imaginify',
  description: 'AI-powered image generator/recognition',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider appearance={{variables: { colorPrimary: '#624cf5' }}}>
      <html lang="en">
        <body className={cn('font-IBMPLex antialiased', IBMPLex.variable)}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
