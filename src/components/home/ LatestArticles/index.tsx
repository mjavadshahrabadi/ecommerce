import React, { FC, ReactElement } from 'react'
import { LatestArticlesList } from '@/components/home/ LatestArticles/LatestArticlesList'

export const LatestArticles: FC = (): ReactElement => {
  return (
    <div className="px-4 lg:px-0">
      <div className="max-w-8xl mx-auto mt-5 lg:mt-8 lg:grid lg:grid-cols-10 p-6 bg-white border-2 border-gray-200 shadow-md rounded-md">
        <div className="col-span-8">
          <LatestArticlesList />
        </div>
        <div className="col-span-2 flex flex-col items-center justify-center space-y-3 mt-4 lg:mt-0">
          <h3 className="text-[14px] font-semibold text-gray-700">
            آخرین مقالات فروشگاه
          </h3>
          <button
            type="button"
            className="py-2 px-3 bg-white text-primary text-[12px] bg-transparent border-2 border-primary hover:border-primary w-fit rounded-md hover:bg-primary hover:text-white font-semibold duration-300 ease-out"
          >
            مشاهده همه
          </button>
        </div>
      </div>
    </div>
  )
}
