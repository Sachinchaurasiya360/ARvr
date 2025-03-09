import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'CareerVerse - Virtual Job Shadowing',
  description: 'Experience different careers through immersive 3D environments',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navigation />
        <main className="container mx-auto px-4">
          {children}
        </main>
      </body>
    </html>
  )
} 