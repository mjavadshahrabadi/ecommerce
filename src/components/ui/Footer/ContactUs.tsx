import React, { FC, ReactElement } from 'react'
import {
  Instagram,
  Telegram,
  Whatsapp,
  Linkedin,
  Youtube,
  Facebook,
} from 'react-bootstrap-icons'

export const ContactUs: FC = (): ReactElement => {
  return (
    <div
      className="max-w-8xl relative -top-[55px] mx-auto bg-black rounded-md py-6 grid grid-cols-3 place-items-center"
      dir="rtl"
    >
      <div className="flex flex-col space-y-3 items-end">
        <h4 className="text-primary font-semibold text-[14px]">
          تماس با روژا: ۰۲۱۵۷۸۲۶۰۰۰
        </h4>
        <h4 className="text-white font-semibold text-[12px]">
          شنبه تا چهارشنبه از ساعت ۸:۳۰ تا ۱۷:۰۰ | پنچشنبه ها از ۸:۳۰ تا ۱۳
        </h4>
      </div>
      <div className="flex flex-col space-y-3 items-center">
        <h4 className="text-white font-semibold text-[13px]">
          از تخفیف‌ها و جدیدترین‌های روژا شاپ باخبر شوید:
        </h4>
        <div className="flex items-center w-full">
          <input
            type="text"
            className="p-2 rounded-tr-md rounded-br-md bg-white text-gray-600 text-[13px] w-full focus:outline-0 text-right"
          />
          <button
            type="button"
            className="text-white p-2 rounded-tl-md rounded-bl-md bg-primary text-[13px] font-semibold"
          >
            ارسال
          </button>
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <h4 className="text-white font-semibold text-[13px]">
          روژا در شبکه های اجتماعی
        </h4>
        <div className="flex items-center space-x-2">
          <i className="bg-gray-800 p-2 rounded-md">
            <Telegram className="w-4 h-4 text-white" />
          </i>
          <i className="bg-gray-800 p-2 rounded-md">
            <Whatsapp className="w-4 h-4 text-white" />
          </i>
          <i className="bg-gray-800 p-2 rounded-md">
            <Linkedin className="w-4 h-4 text-white" />
          </i>
          <i className="bg-gray-800 p-2 rounded-md">
            <Youtube className="w-4 h-4 text-white" />
          </i>
          <i className="bg-gray-800 p-2 rounded-md">
            <Facebook className="w-4 h-4 text-white" />
          </i>
        </div>
      </div>
    </div>
  )
}
