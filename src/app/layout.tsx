import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import JsonLd from '@/components/ui/JsonLd'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ibraheemganayim.com'),
  title: {
    default: 'Ibraheem Ganayim | R&D Team Lead & Full Stack Software Engineer in Tel Aviv',
    template: '%s | Ibraheem Ganayim - Software Engineer'
  },
  description: 'Expert R&D Team Lead and Software Engineer in Tel Aviv with 3+ years of experience. Specializing in full-stack development, cloud architecture, and team leadership. BSc in Software Engineering from Braude College.',
  keywords: [
    'Software Engineer Tel Aviv',
    'R&D Team Lead',
    'Full Stack Developer',
    'React Developer',
    'Node.js Developer',
    'Cloud Architecture Expert',
    'Team Leadership',
    'Tel Aviv Tech Scene',
    'Software Development',
    'Ibraheem Ganayim',
    'Software Engineering Portfolio',
    'Tech Leader Israel'
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
    title: 'Ibraheem Ganayim | R&D Team Lead & Software Engineer in Tel Aviv',
    description: 'Expert R&D Team Lead and Software Engineer with proven experience in full-stack development, cloud architecture, and team leadership. View my portfolio and projects.',
    url: 'https://ibraheemganayim.com',
    siteName: 'Ibraheem Ganayim - Software Engineering Portfolio',
    images: [
      {
        url: '/profile.jpg',
        width: 800,
        height: 800,
        alt: 'Ibraheem Ganayim - R&D Team Lead & Software Engineer in Tel Aviv',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ibraheem Ganayim | R&D Team Lead & Software Engineer in Tel Aviv',
    description: 'Expert R&D Team Lead and Software Engineer with proven experience in full-stack development, cloud architecture, and team leadership.',
    images: ['/profile.jpg'],
    creator: '@ibraheemganayim',
    site: '@ibraheemganayim',
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
        <meta name="google-site-verification" content="google1cf50117acda4d8f" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="canonical" href="https://ibraheemganayim.com" />
        <JsonLd />
      </head>
      <body className="bg-dark text-light antialiased">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
