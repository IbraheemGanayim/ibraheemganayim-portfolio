import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ibraheemganayim.com'),
  title: {
    default: 'Ibraheem Ganayim | R&D Team Lead & Software Engineer',
    template: '%s | Ibraheem Ganayim'
  },
  description: 'Co-founder and R&D Team Lead at Dojo with expertise in full-stack development, system architecture, and team leadership. BSc in Software Engineering.',
  keywords: [
    'Software Engineer',
    'R&D Team Lead',
    'Full Stack Developer',
    'React Developer',
    'Node.js Developer',
    'Cloud Architecture',
    'Team Leadership',
    'Tel Aviv Tech',
    'Software Development',
    'Ibraheem Ganayim'
  ].join(', '),
  authors: [{ name: 'Ibraheem Ganayim' }],
  creator: 'Ibraheem Ganayim',
  publisher: 'Ibraheem Ganayim',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Ibraheem Ganayim | R&D Team Lead & Software Engineer',
    description: 'Co-founder and R&D Team Lead at Dojo. Expert in full-stack development and cloud architecture.',
    url: 'https://ibraheemganayim.com',
    siteName: 'Ibraheem Ganayim Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ibraheem Ganayim - R&D Team Lead & Software Engineer',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ibraheem Ganayim | R&D Team Lead & Software Engineer',
    description: 'Co-founder and R&D Team Lead at Dojo. Expert in full-stack development and cloud architecture.',
    images: ['/og-image.png'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-dark text-light antialiased">
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
