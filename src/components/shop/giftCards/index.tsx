import React, { FC, ReactElement } from 'react'
import { Filters } from '@/components/shop/giftCards/Filters'
import { GiftCardsList } from '@/components/shop/giftCards/GiftCardsList'
import { OrderBy } from '@/components/shop/giftCards/OrderBy'

export const GiftCards: FC = (): ReactElement => {
  return (
    <div className="mb-8 lg:mb-24 max-w-8xl mx-auto px-4 2xl:px-0 lg:grid lg:grid-cols-4 w-full h-full relative gap-5">
      <div className="lg:col-span-3 flex flex-col space-y-6 bg-white">
        <OrderBy />
        <GiftCardsList />
      </div>
      <div className="lg:col-span-1 relative hidden md:block">
        <Filters />
      </div>
    </div>
  )
}
