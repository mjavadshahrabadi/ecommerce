import React, { FC, ReactElement } from 'react'
import { WhyList } from '@/components/advice/WhyBeautyAdvice/WhyList'

export const WhyBeautyAdvice: FC = (): ReactElement => {
  return (
    <div className="max-w-5xl mx-auto mt-14 px-4 2xl:px-0" dir="rtl">
      <h4 className="text-gray-700 font-semibold text-lg lg:text-2xl">
        چرا مشاوره زیبایی روژا؟
      </h4>
      <WhyList />
    </div>
  )
}
