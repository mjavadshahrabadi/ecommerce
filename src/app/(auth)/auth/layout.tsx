import '../../globals.css'
import React from 'react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const yekan = localFont({
  src: '../../../assets/fonts/yekan.woff2',
  display: 'swap',
})

export const metadata: Metadata = {
  title: ' روژا شاپ',
  description: 'javad shahrabadi - m.javadshahrabadi@gmail.com',
  icons: {
    icon: '/img/brand/fav-icon.png',
  },
}
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa">
      <body className={yekan.className}>
        <main className="overflow-hidden">{children}</main>
      </body>
    </html>
  )
}
