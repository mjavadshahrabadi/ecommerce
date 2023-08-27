import React, { FC, ReactElement } from 'react'
import { MenuItem } from '@/components/ui/Navbar/Menu/MenuItem'
import { Star, Gift, Chat, Building, Book, Fire } from 'react-bootstrap-icons'
import Link from 'next/link'
export const MenuList: FC = (): ReactElement => {
  return (
    <ul className="flex items-center justify-end space-x-3 w-fit">
      <MenuItem title="فروش ویژه">
        <Fire className="w-5 h-5 text-gray-600 group-hover:text-primary duration-300 ease-out" />
      </MenuItem>
      <div className="border-r border-gray-200 h-6" />
      <MenuItem title="وبلاگ روژا">
        <Book className="w-5 h-5 text-gray-600 group-hover:text-primary duration-300 ease-out" />
      </MenuItem>
      <div className="border-r border-gray-200 h-6" />
      <Link href="/organizational-sales">
        <MenuItem title="فروش سازمانی">
          <Building className="w-5 h-5 text-gray-600 group-hover:text-primary duration-300 ease-out" />
        </MenuItem>
      </Link>
      <div className="border-r border-gray-200 h-6" />
      <Link href="/advice">
        <MenuItem title="مشاوره رایگان">
          <Chat className="w-5 h-5 text-gray-600 group-hover:text-primary duration-300 ease-out" />
        </MenuItem>
      </Link>
      <div className="border-r border-gray-200 h-6" />
      <Link href="/shop/gift-cards">
        <MenuItem title="کارن هدیه روژا">
          <Gift className="w-5 h-5 text-gray-600 group-hover:text-primary duration-300 ease-out" />
        </MenuItem>
      </Link>
      <div className="border-r border-gray-200 h-6" />
      <MenuItem title="برندها">
        <Star className="w-5 h-5 text-gray-600 group-hover:text-primary duration-300 ease-out" />
      </MenuItem>
    </ul>
  )
}
