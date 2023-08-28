import React, { FC, ReactElement } from 'react'
import { Navbar } from '@/components/blog/navbar'
import { Articles } from '@/components/blog/articles'
import { Perfume } from '@/components/blog/perfume'

export const BlogSection: FC = (): ReactElement => {
  return (
    <section className="w-full h-screen bg-gray-50 overflow-y-scroll">
      <Navbar />
      <Articles />
      <Perfume />
    </section>
  )
}
