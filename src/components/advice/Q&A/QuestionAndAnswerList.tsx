import React, { FC, ReactElement } from 'react'
import Image from 'next/image'

export const QuestionAndAnswerList: FC = (): ReactElement => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="overflow-hidden rounded-md relative">
        <Image
          src="/advice/qa/img-1.jpg"
          alt="bg-1"
          height={0}
          width={0}
          sizes="100vw"
          className="w-full h-auto"
        />
        <div className="absolute h-10 bg-white bottom-0 right-0 left-0 flex items-center justify-center text-sm text-gray-700 bg-opacity-80">
          تگ های های مشاوره و زیبایی
        </div>
      </div>
      <div className="overflow-hidden rounded-md relative">
        <Image
          src="/advice/qa/img-2.jpg"
          alt="bg-2"
          height={0}
          width={0}
          sizes="100vw"
          className="w-full h-auto"
        />
        <div className="absolute h-10 bg-white bottom-0 right-0 left-0 flex items-center justify-center text-sm text-gray-700 bg-opacity-80">
          دسته بندی های مشاوره و زیبایی
        </div>
      </div>
    </div>
  )
}
