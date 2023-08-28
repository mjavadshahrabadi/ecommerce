import React, { FC, ReactElement } from 'react'
import Image from 'next/image'

export const Perfume: FC = (): ReactElement => {
  return (
    <div className="w-full p-10 bg-gray-500 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <button
            className="bg-primary text-white p-2 rounded-md text-sm"
            type="button"
          >
            نمایش همه
          </button>
          <h4 className="text-white text-xl font-semibold">عطر</h4>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="w-full h-[350px] bg-red-100 overflow-hidden rounded-md relative">
            <div className="absolute inset-0 bottomShadow" />
            <Image
              src="/blog/perfume/img-1.jpg"
              alt="img-1"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
            <div className="absolute left-0 right-0 bottom-5 text-center">
              <small className="text-white text-lg font-semibold">
                عنوان مد نظر
              </small>
            </div>
          </div>
          <div className="w-full h-[350px] bg-red-100 overflow-hidden rounded-md relative">
            <div className="absolute inset-0 bottomShadow" />
            <Image
              src="/blog/perfume/img-2.jpg"
              alt="img-2"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
            <div className="absolute left-0 right-0 bottom-5 text-center">
              <small className="text-white text-lg font-semibold">
                عنوان مد نظر
              </small>
            </div>
          </div>
          <div className="w-full h-[350px] bg-red-100 overflow-hidden rounded-md relative">
            <div className="absolute inset-0 bottomShadow" />
            <Image
              src="/blog/perfume/img-3.jpg"
              alt="img-3"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
            <div className="absolute left-0 right-0 bottom-5 text-center">
              <small className="text-white text-lg font-semibold">
                عنوان مد نظر
              </small>
            </div>
          </div>
          <div className="w-full h-[350px] bg-red-100 overflow-hidden rounded-md relative">
            <div className="absolute inset-0 bottomShadow" />
            <Image
              src="/blog/perfume/img-4.jpg"
              alt="img-4"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
            <div className="absolute left-0 right-0 bottom-5 text-center">
              <small className="text-white text-lg font-semibold">
                عنوان مد نظر
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
