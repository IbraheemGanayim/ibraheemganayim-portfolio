import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ibraheem Ganayim | Portfolio',
  description: 'Full-stack developer and designer specializing in creating beautiful, functional digital experiences',
  keywords: 'developer, designer, portfolio, web development, full-stack developer, UI/UX',
  openGraph: {
    title: 'Ibraheem Ganayim | Portfolio',
    description: 'Full-stack developer and designer specializing in creating beautiful, functional digital experiences',
    url: 'https://ibraheemganayim.com',
    siteName: 'Ibraheem Ganayim Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ibraheem Ganayim Portfolio Preview',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ibraheem Ganayim | Portfolio',
    description: 'Full-stack developer and designer specializing in creating beautiful, functional digital experiences',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-dark text-light antialiased`}>
        {children}
      </body>
    </html>
  )
}
