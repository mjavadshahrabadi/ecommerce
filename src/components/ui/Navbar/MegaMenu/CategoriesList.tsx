import React, { FC, ReactElement, useMemo } from 'react'
import data from '@/data/megaMenuProducts.json'
import { CategoriesItem } from '@/components/ui/Navbar/MegaMenu/CategoriesItem'

interface CategoriesList {
  handleSelectedCategory: React.Dispatch<React.SetStateAction<number>>
}
export const CategoriesList: FC<CategoriesList> = ({
  handleSelectedCategory,
}): ReactElement => {
  return (
    <ul className="flex flex-col space-y-4">
      {data &&
        data.map((key) => (
          <CategoriesItem
            key={key.id}
            title={key.faTitle}
            id={key.id}
            handleSelectedCategory={handleSelectedCategory}
          />
        ))}
    </ul>
  )
}
