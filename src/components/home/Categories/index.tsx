import React, { FC, ReactElement } from 'react'
import { CategoriesItem } from '@/components/home/Categories/CategoriesItem'
import categories from '@/data/categories.json'
export const Categories: FC = (): ReactElement => {
  return (
    <ul
      className="max-w-8xl mx-auto grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 px-4 2xl:px-0"
      dir="rtl"
    >
      {categories &&
        categories.map((category) => (
          <CategoriesItem
            title={category.title}
            imgSrc={category.imgSrc}
            key={category.id}
          />
        ))}
    </ul>
  )
}
