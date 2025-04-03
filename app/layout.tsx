import { Inter, Poppins } from 'next/font/google'
import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/react"
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Jobox - Streamline Your Job Search',
  description: 'Organize and track your job applications effortlessly with Jobox.',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">{children}
      <Analytics />
      </body>
    </html>
  )
}



import './globals.css'