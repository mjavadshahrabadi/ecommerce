import React, { FC, ReactElement } from 'react'
import Image from 'next/image'
import { useTimer } from 'react-timer-hook'
import { Timer } from '@/components/home/ShopSuggest/Timer'

interface SuggestItem {
  id: number
  imgSrc: string
  off: string
  price: string
  offPrice: string
  title: string
}

export const SuggestItem: FC<SuggestItem> = ({
  title = '',
  off = '',
  offPrice = '',
  price = '',
  imgSrc = '',
}): ReactElement => {
  const time: Date = new Date()
  time.setSeconds(time.getSeconds() + 3600 * 48) // 10 minutes timer
  const { totalSeconds, seconds, minutes, hours, days, start } = useTimer({
    autoStart: true,
    expiryTimestamp: time,
  })

  return (
    <div className="flex flex-col items-center py-4 overflow-hidden rounded-md space-y-2 relative">
      <div className="w-[150px] h-[150px] relative">
        <Image
          src={imgSrc}
          alt={title}
          fill
          sizes="100vw"
          className="rounded-md"
        />
      </div>
      <h4 className="text-gray-700 text-sm text-center px-4">{title}</h4>
      <h5 className="text-gray-600 text-sm">
        <span className="line-through">{price}</span> تومان
      </h5>
      <h5 className="text-primary text-sm">{price} تومان</h5>

      <div className="absolute top-0 right-2 text-[15px] bg-primary py-0.5 px-4 rounded-md">
        <small className="text-white font-bold">{off}</small>
      </div>
      <Timer days={days} hours={hours} minutes={minutes} seconds={seconds} />
    </div>
  )
}
