'use client'
import React, { FC, ReactElement, useMemo } from 'react'
import data from '../../../../data/megaMenuProducts.json'

interface ProductListProps {
  selectedCategory: number
}

type ListData = { title: string; items: string[] }
export const ProductList: FC<ProductListProps> = ({
  selectedCategory,
}): ReactElement => {
  const selectedList = useMemo(
    () => data.find((item) => item.id === selectedCategory),
    [selectedCategory],
  )

  return (
    <div className="flex flex-col flex-wrap h-full w-[400px]" dir="rtl">
      {selectedList &&
        selectedList.data.map((ele) => (
          <div className="">
            <h2 className="text-primary font-semibold mb-4">{ele.title}</h2>
            {ele.items?.map((product) => (
              <h5 className="my-2 text-sm last:mb-4 cursor-pointer text-gray-600 hover:text-gray-900 duration-300 ease-out">
                {product}
              </h5>
            ))}
          </div>
        ))}
    </div>
  )
}
