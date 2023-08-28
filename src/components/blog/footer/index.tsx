import React, { FC, ReactElement } from 'react'
import {
  HouseDoorFill,
  TelephoneFill,
  Clock,
  EnvelopeFill,
  Envelope,
} from 'react-bootstrap-icons'
import Image from 'next/image'

export const Footer: FC = (): ReactElement => {
  return (
    <footer className="bg-gray-700 mt-10">
      <div
        className="max-w-6xl mx-auto grid grid-cols-3 gap-5 text-white p-5 lg:p-10"
        dir="rtl"
      >
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-semibold">درباره ما</h4>
          <p className="text-white text-[13px]">
            <i className="inline-flex relative top-1 ml-1">
              <HouseDoorFill className="w-4 h-4 text-white" />
            </i>
            تهران، بلوار ميرداماد، جنب دفينه، بازار بزرگ ميرداماد، ساختمان
            اداری، ط 4، واحد 412
          </p>
          <p className="text-white text-[13px]">
            <i className="inline-flex relative top-1 ml-1">
              <TelephoneFill className="w-4 h-4 text-white" />
            </i>
            تماس با ما: ۱۲۳۱۲۳۱۲۳ - ۰۲۱
          </p>
          <p className="text-white text-[13px]">
            <i className="inline-flex relative top-1 ml-1">
              <Clock className="w-4 h-4 text-white" />
            </i>
            ساعت پاسخگويي شنبه تا چهار شنبه از ساعت ۸:۳۰ تا ۱۷:۰۰ | پنج شنبه ها
            از ۸:۳۰ تا ۱۳:۰۰
          </p>
          <p className="text-white text-[13px]">
            <i className="inline-flex relative top-1 ml-1">
              <EnvelopeFill className="w-4 h-4 text-white" />
            </i>
            online@rojagroup.com
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-semibold">اطمینان به اعتبار ما</h4>
          <div className="flex items-start">
            <div className="w-[100px] h-[120px] bg-white rounded-md overflow-hidden ml-4">
              <Image
                src="/license/img-2.png"
                alt="img-1"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-[100px] h-[100px] bg-white rounded-md overflow-hidden">
              <Image
                src="/license/rezi.webp"
                alt="img-1"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-semibold">خبرنامه</h4>
          <p className="text-[13px]">
            از تخفیف‌ها و جدیدترین‌های روژا شاپ باخبر شوید:
          </p>
          <div className="w-full flex items-center relative">
            <input
              type="text"
              className="w-full p-2 focus:outline-0 text-gray-600 text-[13px] rounded-tr-md rounded-br-md pr-14"
            />
            <button
              type="button"
              className="p-2 text-white bg-green-400 text-[13px] rounded-tl-md rounded-bl-md"
            >
              ارسال
            </button>
            <i>
              <Envelope className="w-7 h-7 text-green-400 absolute right-2 top-1" />
            </i>
          </div>
        </div>
      </div>
    </footer>
  )
}
