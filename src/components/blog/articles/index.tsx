import React, { FC, ReactElement } from 'react'
import Image from 'next/image'
import { Calendar3 } from 'react-bootstrap-icons'
import { ArticleCardsContainer } from '@/components/blog/articles/ArticleCardsContainer'

export const Articles: FC = (): ReactElement => {
  return (
    <div className="max-w-6xl mx-auto mt-6">
      <div className="grid grid-cols-8 items-start gap-4" dir="rtl">
        <div className="overflow-hidden rounded-md col-span-4 relative cursor-pointer">
          <Image
            src="/blog/img-1.jpg"
            alt="img-1"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-[450px] object-cover"
          />
          <div className="absolute inset-0 bottomShadow opacity-80" />
          <div className="w-full flex items-center justify-between space-y-2 absolute right-0 left-0 bottom-0 p-3">
            <h5 className="text-white text-[15px] font-semibold">
              فواید خاک رس برای صورت
            </h5>
            <div className="flex items-center">
              <Calendar3 className="w-4 h-4 text-white ml-2" />
              <small className="text-white">۰۲ شهریور ۱۴۰۲</small>
            </div>
          </div>
        </div>

        <div className="col-span-2 flex flex-col space-y-4 ">
          <div className="bg-red-100 h-[170px] overflow-hidden rounded-md relative">
            <Image
              src="/blog/img-2.jpg"
              alt="img-2"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full"
            />
            <div className="absolute inset-0 bottomShadow opacity-80" />
            <div className="w-full flex items-center justify-between space-y-2 absolute right-0 left-0 bottom-0 p-3">
              <h5 className="text-white text-[13px] font-semibold">
                فواید خاک رس برای صورت
              </h5>
              <div className="flex items-center">
                <Calendar3 className="w-4 h-4 text-white ml-1" />
                <small className="text-white text-xs">۰۲ شهریور ۱۴۰۲</small>
              </div>
            </div>
          </div>
          <div className="bg-indigo-100 h-[265px] overflow-hidden rounded-md relative">
            <Image
              src="/blog/img-3.jpg"
              alt="img-1"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bottomShadow opacity-80" />
            <div className="w-full flex items-center justify-between space-y-2 absolute right-0 left-0 bottom-0 p-3">
              <h5 className="text-white text-[13px] font-semibold">
                فواید خاک رس برای صورت
              </h5>
              <div className="flex items-center">
                <Calendar3 className="w-4 h-4 text-white ml-1" />
                <small className="text-white text-xs">۰۲ شهریور ۱۴۰۲</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex flex-col space-y-4">
          <div className="bg-indigo-100 h-[265px] overflow-hidden rounded-md relative">
            <Image
              src="/blog/img-4.jpg"
              alt="img-4"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bottomShadow opacity-80" />
            <div className="w-full flex items-center justify-between space-y-2 absolute right-0 left-0 bottom-0 p-3">
              <h5 className="text-white text-[13px] font-semibold">
                فواید خاک رس برای صورت
              </h5>
              <div className="flex items-center">
                <Calendar3 className="w-4 h-4 text-white ml-1" />
                <small className="text-white text-xs">۰۲ شهریور ۱۴۰۲</small>
              </div>
            </div>
          </div>
          <div className="bg-red-100 h-[170px] overflow-hidden rounded-md relative">
            <Image
              src="/blog/img-5.jpg"
              alt="img-5"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bottomShadow opacity-80" />
            <div className="w-full flex items-center justify-between space-y-2 absolute right-0 left-0 bottom-0 p-3">
              <h5 className="text-white text-[13px] font-semibold">
                فواید خاک رس برای صورت
              </h5>
              <div className="flex items-center">
                <Calendar3 className="w-4 h-4 text-white ml-1" />
                <small className="text-white text-xs">۰۲ شهریور ۱۴۰۲</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ArticleCardsContainer />
    </div>
  )
}
