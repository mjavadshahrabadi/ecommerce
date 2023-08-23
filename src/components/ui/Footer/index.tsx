import React, { FC, ReactElement } from 'react'
import Image from 'next/image'
import { ContactUs } from '@/components/ui/Footer/ContactUs'
import { EnvelopeAt, GeoAlt } from 'react-bootstrap-icons'

export const Footer: FC = (): ReactElement => {
  return (
    <footer className="mt-4 lg:mt-32 relative bg-red-50 w-full p-4 2xl:px-0 pb-10">
      <ContactUs />
      <div className="max-w-8xl mx-auto mt-5 grid grid-cols-1 xl:grid-cols-12 gap-10 lg:gap-14">
        <div className="lg:col-span-2 flex space-x-4 items-center justify-center lg:items-start order-5 lg:-order-5">
          <Image
            src="/license/rezi.webp"
            alt="e-namad"
            width={100}
            height={100}
            sizes="100vw"
          />
          <Image
            src="/license/img-2.png"
            alt="e-namad"
            width={100}
            height={100}
            sizes="100vw"
          />
        </div>
        <div className="flex flex-col items-center lg:items-end space-y-5 lg:col-span-2">
          <p className="text-gray-500 text-[14px] cursor-pointer hover:text-primary duration-300 ease-out">
            حریم خصوصی
          </p>
          <p className="text-gray-500 text-[14px] cursor-pointer hover:text-primary duration-300 ease-out">
            فرصت های شغلی
          </p>
          <p className="text-gray-500 text-[14px] cursor-pointer hover:text-primary duration-300 ease-out">
            قوانین و مقررات
          </p>
          <p className="text-gray-500 text-[14px] cursor-pointer hover:text-primary duration-300 ease-out">
            ارسال هدیه
          </p>
          <p className="text-gray-500 text-[14px] cursor-pointer hover:text-primary duration-300 ease-out">
            سوالات متداول
          </p>
        </div>

        <div className="flex flex-col items-center lg:items-end space-y-5 lg:col-span-2">
          <p className="text-gray-500 text-[14px] cursor-pointer hover:text-primary duration-300 ease-out">
            تماس با ما
          </p>
          <p className="text-gray-500 text-[14px] cursor-pointer hover:text-primary duration-300 ease-out">
            درباره ما
          </p>
          <p className="text-gray-500 text-[14px] cursor-pointer hover:text-primary duration-300 ease-out">
            فروشگاه های روژا
          </p>
          <p className="text-gray-500 text-[14px] cursor-pointer hover:text-primary duration-300 ease-out">
            راهنمای سفارش و خرید
          </p>
          <p className="text-gray-500 text-[14px] cursor-pointer hover:text-primary duration-300 ease-out">
            English
          </p>
        </div>
        <div className="flex flex-col space-y-4 items-center lg:items-end lg:col-span-3 -order-1 lg:order-none">
          <h4 className="text-gray-800 font-semibold text-[14px]">
            زیبا بمانید
          </h4>
          <p className="text-[14px] text-gray-600 text-justify" dir="rtl">
            مجموعه فروشگاه های روژا با بیش از 25 سال سابقه در ارائه محصولات با
            کيفيت ، مرغوب و با اصالت از برندهای معتبر جهانی مشغول به فعاليت است.
            هم اکنون فروشگاه اینترنتی روژا در ادامه اين رسالت و سابقه درخشان، به
            دنبال ارائه محصولات با کيفيت و اورجينال از برندهای معتبر خارجی و
            ايرانی در محيط آنلاين است.
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-end space-y-5 lg:col-span-3 -order-2 lg:order-1">
          <Image
            src="/img/brand/logo.png"
            alt="logo-market"
            width={100}
            height={100}
            sizes="100vw"
          />
          <h4 className="text-gray-700 text-[14px] font-semibold">
            اطلاعات تماس
          </h4>
          <p className="text-[14px]" dir="rtl">
            <i>
              <GeoAlt className="w-5 h-5 ml-1 text-gray-800 inline-flex" />
            </i>
            <strong>بخش اداری:</strong> تهران، بلوار ميرداماد، جنب دفينه، بازار
            بزرگ ميرداماد، ساختمان اداری، ط 4، واحد 412
          </p>
          <p className="text-[14px]" dir="rtl">
            <i>
              <GeoAlt className="w-5 h-5 ml-1 text-gray-800 inline-flex" />
            </i>
            <strong>آدرس فروشگاه:</strong> فروشگاه های روژا
          </p>
          <p className="text-[14px]" dir="rtl">
            <i>
              <EnvelopeAt className="w-5 h-5 ml-1 text-gray-800 inline-flex" />
            </i>
            <strong>پست الکترونیکی:</strong> online@rojagroup.com
          </p>
        </div>
      </div>
    </footer>
  )
}
