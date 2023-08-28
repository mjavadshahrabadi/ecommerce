import React, { FC, ReactElement } from 'react'
import { OnSalesProductsItem } from '@/components/onsales/OnSalesProductsItem'

export const OnSaleProductsList: FC = (): ReactElement => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mt-5">
      <OnSalesProductsItem
        imgSrc="/onsales/img-1.jpg"
        title="عنوان مد نظر"
        offPrice="۵۸,۰۰۰"
        price="۷۸,۰۰۰"
        off="۱۵٪"
      />
      <OnSalesProductsItem
        imgSrc="/onsales/img-2.jpg"
        title="عنوان مد نظر"
        offPrice="۵۸,۰۰۰"
        price="۷۸,۰۰۰"
        off="۱۵٪"
      />
      <OnSalesProductsItem
        imgSrc="/onsales/img-3.jpg"
        title="عنوان مد نظر"
        offPrice="۵۸,۰۰۰"
        price="۷۸,۰۰۰"
        off="۱۵٪"
      />
      <OnSalesProductsItem
        imgSrc="/onsales/img-4.jpg"
        title="عنوان مد نظر"
        offPrice="۵۸,۰۰۰"
        price="۷۸,۰۰۰"
        off="۱۵٪"
      />
      <OnSalesProductsItem
        imgSrc="/onsales/img-5.jpg"
        title="عنوان مد نظر"
        offPrice="۵۸,۰۰۰"
        price="۷۸,۰۰۰"
        off="۱۵٪"
      />
      <OnSalesProductsItem
        imgSrc="/onsales/img-6.jpg"
        title="عنوان مد نظر"
        offPrice="۵۸,۰۰۰"
        price="۷۸,۰۰۰"
        off="۱۵٪"
      />
      <OnSalesProductsItem
        imgSrc="/onsales/img-5.jpg"
        title="عنوان مد نظر"
        offPrice="۵۸,۰۰۰"
        price="۷۸,۰۰۰"
        off="۱۵٪"
      />
      <OnSalesProductsItem
        imgSrc="/onsales/img-4.jpg"
        title="عنوان مد نظر"
        offPrice="۵۸,۰۰۰"
        price="۷۸,۰۰۰"
        off="۱۵٪"
      />
      <OnSalesProductsItem
        imgSrc="/onsales/img-3.jpg"
        title="عنوان مد نظر"
        offPrice="۵۸,۰۰۰"
        price="۷۸,۰۰۰"
        off="۱۵٪"
      />
      <OnSalesProductsItem
        imgSrc="/onsales/img-2.jpg"
        title="عنوان مد نظر"
        offPrice="۵۸,۰۰۰"
        price="۷۸,۰۰۰"
        off="۱۵٪"
      />
      <OnSalesProductsItem
        imgSrc="/onsales/img-1.jpg"
        title="عنوان مد نظر"
        offPrice="۵۸,۰۰۰"
        price="۷۸,۰۰۰"
        off="۱۵٪"
      />
      <OnSalesProductsItem
        imgSrc="/onsales/img-6.jpg"
        title="عنوان مد نظر"
        offPrice="۵۸,۰۰۰"
        price="۷۸,۰۰۰"
        off="۱۵٪"
      />
    </ul>
  )
}
