import React, { FC, ReactElement } from 'react'
import Image from 'next/image'

export const CartTypesList: FC = (): ReactElement => {
  return (
    <div className="max-w-6xl mx-auto my-5 flex flex-col space-y-5">
      <h4 className="text-[14px] text-gray-700 text-center">
        با پیوستن به باشگاه مشتریان وفادار روژا، هرروز از امتیازات بی نظیر آن
        بهره مند خواهید شد
      </h4>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <li>
          <Image
            src="/customer-club/img-1.jpg"
            alt="img-1"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </li>
        <li>
          <Image
            src="/customer-club/img-2.jpg"
            alt="img-2"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </li>
        <li>
          <Image
            src="/customer-club/img-3.jpg"
            alt="img-3"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </li>
      </ul>
    </div>
  )
}
