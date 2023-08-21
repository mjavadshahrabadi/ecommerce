import React, { FC, ReactElement } from 'react'
import { BrandsList } from '@/components/home/Brands/BrandsList'

export const Brands: FC = (): ReactElement => {
  return (
    <div className="grid grid-cols-10 max-w-8xl mx-auto mt-8 p-5 border-2 border-gray-200 rounded-md">
      <div className="col-span-8 bg-white">
        <BrandsList />
      </div>
      <div className="col-span-2 flex flex-col items-center space-y-2">
        <h4 className="text-gray-700 text-[15px] font-semibold">برندها</h4>
        <button
          type="button"
          className="py-2 px-3 bg-white text-primary text-[12px] bg-transparent border-2 border-primary hover:border-primary w-fit rounded-md hover:bg-primary hover:text-white font-semibold duration-300 ease-out"
        >
          مشاهده همه
        </button>
      </div>
    </div>
  )
}
