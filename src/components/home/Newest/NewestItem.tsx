import React, { FC, ReactElement } from 'react'
import Image from 'next/image'

interface NewestItem {
  id: number
  imgSrc: string
  off: string
  tag: string
  price: string
  title: string
  offPrice: string
}

export const NewestItem: FC<NewestItem> = ({
  imgSrc = '',
  title = '',
  tag = '',
  off = '',
  offPrice = '',
  price = '',
}): ReactElement => {
  return (
    <div className="flex flex-col items-center px-3 py-6 overflow-hidden rounded-md relative h-full space-y-5 shadow-sm">
      <div className="w-[160px] h-[160px] relative">
        <Image
          src={imgSrc}
          alt="product"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
      <h4 className="text-gray-700 text-sm text-center px-4">{title}</h4>
      <div>
        <h5 className="text-gray-600 text-sm">
          <span className="line-through">{price}</span> تومان
        </h5>

        {offPrice && (
          <h5 className="text-primary text-sm mt-2">{offPrice} تومان</h5>
        )}
      </div>

      <div className="absolute flex flex-col space-y-2 -top-3 right-2 text-[15px] ">
        {off && (
          <small className="text-white font-bold bg-primary  py-0.5 px-2 rounded-md w-fit">
            {off}
          </small>
        )}
        {tag && (
          <small className="text-white text-[10px] font-bold bg-black  py-0.5 px-2 rounded-md">
            {tag}
          </small>
        )}
      </div>
    </div>
  )
}
