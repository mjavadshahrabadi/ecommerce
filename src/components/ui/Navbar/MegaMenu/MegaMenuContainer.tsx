import React, { FC, ReactElement } from 'react'
import { CategoriesList } from '@/components/ui/Navbar/MegaMenu/CategoriesList'
import { ProductList } from '@/components/ui/Navbar/MegaMenu/ProductList'

interface MegaMenuContainerProps {
  hovered: boolean
  selectedCategory: number
  setSelectedCategory: React.Dispatch<React.SetStateAction<number>>
}
export const MegaMenuContainer: FC<MegaMenuContainerProps> = ({
  hovered,
  selectedCategory,
  setSelectedCategory,
}): ReactElement => {
  return (
    <>
      {hovered && (
        <div className="absolute top-10 left-0 right-0 bg-indigo-200  rounded-md z-50 grid grid-cols-10 shadow-md cursor-default w-auto">
          <div
            className="col-span-8 bg-gray-50 p-5 overflow-hidden h-[400px] place-cont"
            dir="rtl"
          >
            <ProductList selectedCategory={selectedCategory} />
          </div>
          <div className="col-span-2 bg-white p-5">
            <CategoriesList handleSelectedCategory={setSelectedCategory} />
          </div>
        </div>
      )}
    </>
  )
}
