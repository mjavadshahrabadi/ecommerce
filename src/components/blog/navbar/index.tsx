'use client'
import React, { FC, ReactElement, useState } from 'react'
import Image from 'next/image'
import { NavLinksList } from '@/components/blog/navbar/NavLinksList'
import { Basket } from 'react-bootstrap-icons'
import Link from 'next/link'
import { BlogSidebar } from '@/components/blog/navbar/Sidebar'
import { List } from 'react-bootstrap-icons'

export const Navbar: FC = (): ReactElement => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <header className="bg-white py-3 shadow-md px-4 2xl:px-0" dir="rtl">
      <BlogSidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <nav className="max-w-6xl mx-auto flex items-center justify-between">
        <div>
          <Image
            src="/img/brand/logo-blog.png"
            alt="blog-logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto hidden lg:block"
          />
          <List
            className="w-9 h-9 text-gray-500 lg:hidden cursor-pointer"
            onClick={() => setIsSidebarOpen(true)}
          />
        </div>

        <NavLinksList />

        <Link href="/">
          <div className="flex items-center p-2 bg-primary rounded-md shadow-sm cursor-pointer">
            <Basket className="text-white w-5 h-5 ml-1" />
            <small className="text-white font-semibold">ورود به فروشگاه</small>
          </div>
        </Link>
      </nav>
    </header>
  )
}
