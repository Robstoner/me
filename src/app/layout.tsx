import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ style: 'normal', weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Schmidt Robert - Portfolio',
  description: 'Personal website of Robert Schmidt',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
