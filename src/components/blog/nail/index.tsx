import React, { FC, ReactElement } from 'react'
import { NailArticleList } from '@/components/blog/nail/NailArticleList'

export const Nail: FC = (): ReactElement => {
  return (
    <div className="max-w-6xl mx-auto mt-10 flex flex-col space-y-6 px-4 2xl:px-0">
      <div className="flex items-center justify-between">
        <button
          type="button"
          className="text-sm bg-green-500 text-white p-2 rounded-md shadow-lg shadow-green-300"
        >
          نمایش همه
        </button>
        <h4 className="text-lg text-gray-700 font-semibold">مراقبت از ناخن</h4>
      </div>
      <NailArticleList />
    </div>
  )
}
