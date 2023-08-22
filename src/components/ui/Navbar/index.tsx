'use client'
import React, { FC, ReactElement, useState } from 'react'
import { Logo } from '@/components/ui/Navbar/Logo'
import { SearchBox } from '@/components/ui/Navbar/SearchBox'
import { LoginOrSignupBtn } from '@/components/ui/Navbar/LoginOrSignupBtn'
import { OrderBasket } from '@/components/ui/Navbar/OrderBasket'
import { MenuList } from '@/components/ui/Navbar/Menu/MenuList'
import { CClubAndBranch } from '@/components/ui/Navbar/CClubAndBranch'
import { MegaMenu } from '@/components/ui/Navbar/MegaMenu'
import { Sidebar } from '@/components/ui/Navbar/Sidebar'
import { ToggleMenu } from '@/components/ui/Navbar/Sidebar/ToggleMenu'

export const Navbar: FC = (): ReactElement => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <nav className="max-w-8xl mx-auto h-200 py-3  lg:py-5 flex flex-col space-y-1 px-4 2xl:px-0">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="flex flex-row-reverse items-center justify-center w-full">
        <div className="lg:hidden block">
          <ToggleMenu
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </div>
        <div className="flex lg:items-end lg:space-x-4 w-full lg:w-1/2">
          <SearchBox />
          <Logo />
        </div>
        <div className="flex items-center space-x-3 w-full lg:w-1/2">
          <OrderBasket />
          <div className="border-r border-gray-300 h-8 hidden lg:block" />
          <LoginOrSignupBtn />
        </div>
      </div>
      <div className="hidden lg:flex flex-row-reverse items-center justify-between relative w-full">
        <div className="flex items-center space-x-4">
          <MenuList />
          <MegaMenu />
        </div>
        <CClubAndBranch />
      </div>
    </nav>
  )
}
