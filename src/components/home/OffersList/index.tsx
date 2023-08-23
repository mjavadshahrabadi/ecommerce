import React, { FC, ReactElement } from 'react'
import { OffersItem } from '@/components/home/OffersList/OffersItem'

export const OffersList: FC = (): ReactElement => {
  return (
    <ul className="grid grid-cols-2 px-4 2xl:px-0 lg:grid-cols-4 gap-4 max-w-8xl mx-auto">
      <OffersItem imgSrc="/offers/offer-4.jpg" title="عطرهای مناسب هدیه" />
      <OffersItem imgSrc="/offers/offer-3.jpg" title="مراقبت از مو" />
      <OffersItem imgSrc="/offers/offer-2.jpg" title="مراقبت پوست" />
      <OffersItem imgSrc="/offers/offer-1.jpg" title="ارایش و زیبایی" />
    </ul>
  )
}
