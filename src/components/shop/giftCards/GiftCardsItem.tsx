import React, { FC, ReactElement } from 'react'
import Image from 'next/image'

interface GiftCardsItem {
  imgSrc: string
  title: string
  startPrice: string
}
export const GiftCardsItem: FC<GiftCardsItem> = ({
  imgSrc,
  title,
  startPrice,
}): ReactElement => {
  return (
    <div className="flex flex-col items-center space-y-4 w-full h-full cursor-pointer border p-4 rounded-md shadow-sm hover:scale-95 duration-300 ease-out">
      <Image
        src={imgSrc}
        alt={title}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
        objectFit="contain"
      />
      <div className="flex flex-col space-y-2 text-center">
        <h4 className="text-gray-700 font-semibold">{title}</h4>
        <p className="text-sm text-gray-600">از {startPrice} تومان</p>
      </div>
    </div>
  )
}
