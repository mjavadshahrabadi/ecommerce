import React, { FC, ReactElement } from 'react'
import Image from 'next/image'
import { SuggestList } from '@/components/home/ShopSuggest/SuggestList'

export const ShopSuggest: FC = (): ReactElement => {
  return (
    <div className="bg-gradient-to-r from-primary to-pink-500 w-full p-6 rounded-md mt-8 max-w-8xl mx-auto flex items-center">
      <div className="w-4/5">
        <SuggestList />
      </div>
      <div className="w-1/5 flex flex-col items-center space-y-3">
        <Image
          src="/vector3d/offer-suggest.png"
          alt="پیشنهاد فروشگاه"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />

        <h4 className="text-center text-sm font-semibold text-white">
          پیشنهاد فروشگاه
        </h4>

        <button
          type="button"
          className="py-2 px-3 text-white text-sm bg-transparent border-2 border-white w-fit rounded-md hover:bg-white hover:text-primary font-semibold duration-300 ease-out"
        >
          مشاهده همه
        </button>
      </div>
    </div>
  )
}
