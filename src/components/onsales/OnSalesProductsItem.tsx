'use client'
import React, { FC, ReactElement } from 'react'
import Image from 'next/image'
import { useTimer } from 'react-timer-hook'
import { Timer } from '@/components/home/ShopSuggest/Timer'

interface OnSalesProductsItemProps {
  imgSrc: string
  title: string
  off: string
  price: string
  offPrice: string
}
export const OnSalesProductsItem: FC<OnSalesProductsItemProps> = ({
  off,
  offPrice,
  price,
  imgSrc,
  title,
}): ReactElement => {
  const time: Date = new Date()
  time.setSeconds(time.getSeconds() + 3600 * 48) // 10 minutes timer
  const { totalSeconds, seconds, minutes, hours, days, start } = useTimer({
    autoStart: true,
    expiryTimestamp: time,
  })

  return (
    <li
      className="bg-white shadow-md relative p-6 rounded-md cursor-pointer hover:scale-95 duration-300 ease-out hover:shadow-lg"
      dir="rtl"
    >
      <div className="flex items-center justify-center">
        <Image
          src={imgSrc}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          className="w-[200px] lg:w-full h-[200px] lg:h-[200px]"
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center space-y-2">
          <h4 className="text-gray-700 font-semibold text-[14px] lg:text-[15px]">
            {title}
          </h4>
          <span className="line-through text-gray-500 text-[13px]">
            {price} تومان
          </span>
          <span className="text-[13px] text-primary">{offPrice} تومان</span>
          <Timer
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
        </div>
      </div>
      <div className="absolute p-1 text-xs bg-primary text-white rounded-md top-3 right-3">
        {off}
      </div>
    </li>
  )
}
