import './globals.css'
import type { Metadata } from 'next'
import React from 'react'
import localFont from 'next/font/local'

// custom font - iran yekan
const yekan = localFont({
  src: '../assets/fonts/yekan.woff2',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ecommerce',
  description: 'javad shahrabadi - m.javadshahrabadi@gmail.com',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa">
      <body className={yekan.className}>{children}</body>
    </html>
  )
}
