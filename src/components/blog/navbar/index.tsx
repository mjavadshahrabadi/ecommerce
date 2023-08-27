import React, { FC, ReactElement } from 'react'
import Image from 'next/image'
import { NavLinksList } from '@/components/blog/navbar/NavLinksList'
import { Basket } from 'react-bootstrap-icons'
import Link from 'next/link'

export const Navbar: FC = (): ReactElement => {
  return (
    <header className="bg-white py-3 shadow-md" dir="rtl">
      <nav className="max-w-6xl mx-auto flex items-center justify-between">
        <div>
          <Image
            src="/img/brand/logo-blog.png"
            alt="blog-logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
        <div>
          <NavLinksList />
        </div>
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
