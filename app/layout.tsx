import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Health Testing Services',
  description: 'Discover your VO2 max, microbiome profile, and genetic blueprint',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-white dark:bg-black`}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}