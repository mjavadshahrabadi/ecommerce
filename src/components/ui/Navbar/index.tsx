import React, { FC, ReactElement, useState } from 'react'
import { Logo } from '@/components/ui/Navbar/Logo'
import { SearchBox } from '@/components/ui/Navbar/SearchBox'
import { LoginOrSignupBtn } from '@/components/ui/Navbar/LoginOrSignupBtn'
import { OrderBasket } from '@/components/ui/Navbar/OrderBasket'
import { MenuList } from '@/components/ui/Navbar/Menu/MenuList'
import { CClubAndBranch } from '@/components/ui/Navbar/CClubAndBranch'
import { MegaMenu } from '@/components/ui/Navbar/MegaMenu'

export const Navbar: FC = (): ReactElement => {
  return (
    <nav className="max-w-8xl mx-auto h-200 py-5 flex flex-col space-y-1">
      <div className="flex flex-row-reverse items-center justify-between">
        <div className="flex items-end space-x-4 w-full lg:w-1/2">
          <SearchBox />
          <Logo />
        </div>
        <div className="flex items-center space-x-3 w-1/2 lg:w-1/2">
          <OrderBasket />
          <div className="border-r border-gray-300 h-8" />
          <LoginOrSignupBtn />
        </div>
      </div>
      <div className="flex flex-row-reverse items-center justify-between relative w-full">
        <div className="flex items-center space-x-4">
          <MenuList />
          <MegaMenu />
        </div>
        <CClubAndBranch />
      </div>
    </nav>
  )
}
