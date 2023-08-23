import React, { FC, ReactElement } from 'react'
import Image from 'next/image'
import { NewestList } from '@/components/home/Newest/NewestList'

export const Bestselling: FC = (): ReactElement => {
  return (
    <div className="px-4 2xl:px-0">
      <div className="max-w-8xl mx-auto mt-5 lg:mt-8 lg:grid lg:grid-cols-10 p-6 bg-pink-100 shadow-md rounded-md">
        <div className="col-span-8">
          <NewestList />
        </div>
        <div className="col-span-2 flex flex-col items-center space-y-4 mt-2 lg:mt-0">
          <Image
            src="/vector3d/medal.png"
            alt="medal-vector"
            width={200}
            height={200}
            sizes="100vw"
            className="hidden lg:block"
          />
          <h3 className="text-[14px] font-semibold text-gray-700">
            پرفروش ترین ها در فروشگاه
          </h3>
          <button
            type="button"
            className="py-2 px-3 bg-white text-primary text-[12px] bg-transparent border-2 border-white hover:border-primary w-fit rounded-md hover:bg-primary hover:text-white font-semibold duration-300 ease-out"
          >
            مشاهده همه
          </button>
        </div>
      </div>
    </div>
  )
}
