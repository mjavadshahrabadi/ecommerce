import React, { FC, ReactElement } from 'react'
import { CategoriesList } from '@/components/ui/Navbar/MegaMenu/CategoriesList'

interface MegaMenuContainerProps {
  hovered: boolean
}
export const MegaMenuContainer: FC<MegaMenuContainerProps> = ({
  hovered,
}): ReactElement => {
  return (
    <>
      {hovered && (
        <div className="absolute top-10 left-0 right-0 bg-indigo-200 p-5 rounded-md z-50 grid grid-cols-10">
          <div className="col-span-8 bg-amber-100">2</div>
          <div className="col-span-2 bg-red-100">
            <CategoriesList />
          </div>
        </div>
      )}
    </>
  )
}
