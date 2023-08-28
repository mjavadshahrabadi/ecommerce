import React, { FC, ReactElement } from 'react'
import Image from 'next/image'
import { Clock, Person } from 'react-bootstrap-icons'

export const ArticleCardsContainer: FC = (): ReactElement => {
  return (
    <div className="mt-10 grid grid-cols-2 gap-5">
      <div className="flex flex-col space-y-4 bg-white shadow-md border rounded-md p-3">
        <div className="flex items-center justify-between" dir="rtl">
          <h4 className="text-blue-400 text-[15px] font-semibold">
            آرایشی بهداشتی
          </h4>
          <button
            type="button"
            className="bg-blue-400 p-2 text-white shadow-2xl drop-shadow-md shadow-indigo-400 rounded-md text-[14px]"
          >
            نمایش همه
          </button>
        </div>

        <div className="flex items-start space-x-3">
          <div className="flex flex-col space-y-1" dir="rtl">
            <h5 className="text-sm font-semibold text-gray-700">
              فواید خاک رس برای صورت + روش تهیه ماسک
            </h5>
            <div className="flex items-center">
              <div className="flex items-center ml-2">
                <Clock className="w-3 h-3 text-gray-500 ml-1" />
                <small className="text-gray-500">۰۲ شهریور ۱۴۰۲</small>
              </div>
              <div className="flex items-center">
                <Person className="w-3 h-3 text-gray-500 ml-1" />
                <small className="text-gray-500">روژا</small>
              </div>
            </div>

            <p className="text-xs text-gray-500">
              استفاده از خاک رس برای درمان مشکلات پوستی، سابقه‌ای چندین هزار
              ساله در جهان دارد. مردمان بومی در تمد...
            </p>
          </div>
          <div className="h-[120px] w-[200px] overflow-hidden rounded-xl flex shrink-0">
            <Image
              src="/blog/img-1.jpg"
              alt="آرایشی و بهداشتی"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="flex flex-col items-center space-y-2">
            <div className="h-[100px] w-full overflow-hidden rounded-md">
              <Image
                src="/blog/img-2.jpg"
                alt="آرایشی و بهداشتی"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
            <small className="text-gray-700">عنوان مد نظر</small>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="h-[100px] w-full overflow-hidden rounded-md">
              <Image
                src="/blog/img-3.jpg"
                alt="آرایشی و بهداشتی"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
            <small className="text-gray-700">عنوان مد نظر</small>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="h-[100px] w-full overflow-hidden rounded-md">
              <Image
                src="/blog/img-4.jpg"
                alt="آرایشی و بهداشتی"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
            <small className="text-gray-700">عنوان مد نظر</small>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4 bg-white shadow-md border rounded-md p-3">
        <div className="flex items-center justify-between" dir="rtl">
          <h4 className="text-orange-400 text-[15px] font-semibold">
            مراقبت از پوست
          </h4>
          <button
            type="button"
            className="bg-orange-400 p-2 text-white shadow-2xl drop-shadow-md shadow-orange-400 rounded-md text-[14px]"
          >
            نمایش همه
          </button>
        </div>

        <div className="flex items-start space-x-3">
          <div className="flex flex-col space-y-1" dir="rtl">
            <h5 className="text-sm font-semibold text-gray-700">
              بهترین محصولات آرایشی برای پوست خشک
            </h5>
            <div className="flex items-center">
              <div className="flex items-center ml-2">
                <Clock className="w-3 h-3 text-gray-500 ml-1" />
                <small className="text-gray-500">۰۲ شهریور ۱۴۰۲</small>
              </div>
              <div className="flex items-center">
                <Person className="w-3 h-3 text-gray-500 ml-1" />
                <small className="text-gray-500">روژا</small>
              </div>
            </div>

            <p className="text-xs text-gray-500">
              اگر پوست خشک و حساسی دارید، احتمالا شما هم بعد از آرایش با مشکلاتی
              از قبیل ظاهر کیکی، ماسیدن آرایش و...
            </p>
          </div>
          <div className="h-[120px] w-[200px] overflow-hidden rounded-xl flex shrink-0">
            <Image
              src="/blog/img-5.jpg"
              alt="آرایشی و بهداشتی"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="flex flex-col items-center space-y-2">
            <div className="h-[100px] w-full overflow-hidden rounded-md">
              <Image
                src="/blog/img-4.jpg"
                alt="آرایشی و بهداشتی"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
            <small className="text-gray-700">عنوان مد نظر</small>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="h-[100px] w-full overflow-hidden rounded-md">
              <Image
                src="/blog/img-3.jpg"
                alt="آرایشی و بهداشتی"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
            <small className="text-gray-700">عنوان مد نظر</small>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="h-[100px] w-full overflow-hidden rounded-md">
              <Image
                src="/blog/img-1.jpg"
                alt="آرایشی و بهداشتی"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
            <small className="text-gray-700">عنوان مد نظر</small>
          </div>
        </div>
      </div>
    </div>
  )
}
