import React, { FC, ReactElement } from 'react'
import { Navbar } from '@/components/blog/navbar'
import { Articles } from '@/components/blog/articles'
import { Perfume } from '@/components/blog/perfume'
import { Hair } from '@/components/blog/hair'
import { Nail } from '@/components/blog/nail'
import { Footer } from '@/components/blog/footer'
import { BlogSidebar } from '@/components/blog/navbar/Sidebar'

export const BlogSection: FC = (): ReactElement => {
  return (
    <section className="w-full h-screen bg-gray-50 overflow-y-scroll">
      <Navbar />
      <Articles />
      <Perfume />
      <Hair />
      <Nail />
      <Footer />
    </section>
  )
}
