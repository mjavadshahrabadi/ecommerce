import React, { FC, ReactElement } from 'react'
import { OnSaleProductsList } from '@/components/onsales/OnSaleProductsList'

export const OnSales: FC = (): ReactElement => {
  return (
    <div className="max-w-8xl mx-auto mt-2">
      <div className="relative w-full h-1 border-t-2 border-gray-300 z-10 flex items-center justify-center">
        <h4 className="absolute -top-4 rounded-md z-20 w-fit bg-gray-50 px-4 text-primary font-semibold">
          فروش سازمانی روژا
        </h4>
      </div>

      <OnSaleProductsList />
    </div>
  )
}
