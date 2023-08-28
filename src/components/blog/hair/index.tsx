import React, { FC, ReactElement } from 'react'
import { HairArticleList } from '@/components/blog/hair/HairArticleList'

export const Hair: FC = (): ReactElement => {
  return (
    <div className="max-w-6xl mx-auto mt-10 flex flex-col space-y-6">
      <div className="flex items-center justify-between">
        <button
          type="button"
          className="text-sm bg-green-500 text-white p-2 rounded-md shadow-lg shadow-green-300"
        >
          نمایش همه
        </button>
        <h4 className="text-lg text-gray-700 font-semibold">مراقبت از مو</h4>
      </div>
      <HairArticleList />
    </div>
  )
}
