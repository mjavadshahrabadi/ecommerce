import React, { FC, ReactElement } from 'react'
import giftCardJsonData from '@/data/giftCards.json'
import { GiftCardsItem } from '@/components/shop/giftCards/GiftCardsItem'

export const GiftCardsList: FC = (): ReactElement => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
      {giftCardJsonData &&
        giftCardJsonData.map((item) => (
          <GiftCardsItem
            imgSrc={item.imgSrc}
            title={item.title}
            startPrice={item.startPrice}
          />
        ))}
    </div>
  )
}
