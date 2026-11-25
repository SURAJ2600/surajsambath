import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const siteUrl = 'https://suraj2600.github.io/surajsambath/'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Suraj Sambath Kumar — Senior Android Engineer',
  description:
    'Senior Android engineer with 10 years of Kotlin. Led the mobile platform team at Mindvalley: media playback, 99.6% crash-free sessions, 30% faster cold start. Open to Dublin, Bengaluru and remote roles.',
  authors: [{ name: 'Suraj Sambath Kumar' }],
  openGraph: {
    title: 'Suraj Sambath Kumar — Senior Android Engineer',
    description:
      'Platform architecture, media systems, and performance engineering for large-scale mobile apps.',
    type: 'website',
    url: siteUrl,
    images: [{ url: 'profile.jpg', width: 512, height: 512, alt: 'Suraj Sambath Kumar' }],
  },
  twitter: { card: 'summary' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  )
}
