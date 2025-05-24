import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ahmed Mustafa | Full Stack Web Developer',
  description: 'Portfolio of Ahmed Mustafa, a Full Stack Web Developer specializing in Next.js, React, and modern web technologies.',
  keywords: ['Ahmed Mustafa', 'Full Stack Developer', 'Web Developer', 'React Developer', 'Next.js Developer', 'Frontend Developer', 'Backend Developer'],
  authors: [{ name: 'Ahmed Mustafa' }],
  creator: 'Ahmed Mustafa',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-git-main-tgrdg.vercel.app', // Replace with your actual domain when you have one
    title: 'Ahmed Mustafa | Full Stack Web Developer',
    description: 'Portfolio of Ahmed Mustafa, a Full Stack Web Developer specializing in Next.js, React, and modern web technologies.',
    siteName: 'Ahmed Mustafa Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Mustafa | Full Stack Web Developer',
    description: 'Portfolio of Ahmed Mustafa, a Full Stack Web Developer specializing in Next.js, React, and modern web technologies.',
    creator: '@ahmedmustafa', // Replace with your actual Twitter handle if you have one
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
