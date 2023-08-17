import React, { FC, ReactElement } from 'react'
import { CategoriesIcon } from '@/components/ui/Navbar/MegaMenu/CategoriesIcon'

interface CategoriesItemProps {
  title: string
  id: number
  handleSelectedCategory: React.Dispatch<React.SetStateAction<number>>
}

export const CategoriesItem: FC<CategoriesItemProps> = ({
  title,
  id,
  handleSelectedCategory,
}): ReactElement => {
  return (
    <li
      className="flex items-center justify-end space-x-2 hover:bg-gray-100 p-2 rounded-md duration-200 ease-out cursor-pointer"
      onMouseEnter={() => handleSelectedCategory(id)}
    >
      <h4 className="text-[13px] text-gray-600 font-semibold">{title}</h4>
      <CategoriesIcon id={id} />
    </li>
  )
}
