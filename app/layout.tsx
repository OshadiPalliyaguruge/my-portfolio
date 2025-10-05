import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Oshadi Palliyaguruge - Portfolio',
  description: 'Interactive portfolio website showcasing my projects and skills',
  keywords: 'portfolio, developer, designer, web development, react, nextjs',
  authors: [{ name: 'Oshadi Palliyaguruge' }],
  openGraph: {
    title: 'Oshadi Palliyaguruge - Portfolio',
    description: 'Interactive portfolio website showcasing my projects and skills',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oshadi Palliyaguruge - Portfolio',
    description: 'Interactive portfolio website showcasing my projects and skills',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}