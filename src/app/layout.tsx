import './globals.css'
import type { Metadata } from 'next'
import React from 'react'
import localFont from 'next/font/local'
import { Advertise } from '@/components/ui/Advertise'
import { Navbar } from '@/components/ui/Navbar'

import 'swiper/css'
import 'swiper/css/free-mode'

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
      <body className={yekan.className}>
        <main>
          <Advertise
            src={[
              '/gif/advertise/ads-1.gif',
              '/gif/advertise/ads-1-mobile.gif',
            ]}
          />
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
