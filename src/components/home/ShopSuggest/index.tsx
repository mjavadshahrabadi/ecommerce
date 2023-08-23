import React, { FC, ReactElement } from 'react'
import Image from 'next/image'
import { SuggestList } from '@/components/home/ShopSuggest/SuggestList'

export const ShopSuggest: FC = (): ReactElement => {
  return (
    <div className="px-4 2xl:px-0">
      <div className="bg-gradient-to-r from-primary to-pink-500 w-full rounded-md mt-5 lg:mt-8 max-w-8xl p-5 lg:mx-auto lg:grid lg:grid-cols-10">
        <div className="lg:col-span-8">
          <SuggestList />
        </div>
        <div className="lg:col-span-2 flex flex-col items-center space-y-4 mt-2 lg:mt-0 lg:space-y-6">
          <Image
            src="/vector3d/offer-suggest.png"
            alt="پیشنهاد فروشگاه"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto hidden lg:block"
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
    </div>
  )
}
