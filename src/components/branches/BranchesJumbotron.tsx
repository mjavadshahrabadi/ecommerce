import React, { FC, ReactElement } from 'react'

export const BranchesJumbotron: FC = (): ReactElement => {
  return (
    <div className="w-full p-10 bg-gradient-to-b from-gray-300 to-gray-100">
      <div className="flex flex-col items-center justify-center space-y-4 text-gray-700 font-semibold text-[15px]">
        <span>خرید حضوری</span>
        <span>و</span>
        <span>سفارش تلفنی از شعب روژا با مشاوره تخصصی و ارسال رایگان</span>
      </div>

      <div
        className="flex flex-col space-y-4 max-w-5xl mx-auto mt-5 text-[14px] text-gray-600"
        dir="rtl"
      >
        <p>کافیه فقط :</p>

        <ul className="flex flex-col space-y-2 list-disc mr-8">
          <li>با یکی از شعب روژا تماس بگیرید</li>
          <li>پس از مشاوره تخصصی، محصول مورد نظر خود را انتخاب کنید</li>
          <li>سفارشتان را بدون پرداخت هزینه حمل درب منزل دریافت نمایید</li>
          <li>
            از موجودی کارت اشتراک و کارت هدیه خود با خواندن شماره 16 رقمی
            استفاده نمایید
          </li>
        </ul>
        <p className="mt-5 text-[14px]">
          با کلیک بر روی شماره تلفن هر فروشگاه به صورت مستقیم با آن فروشگاه تماس
          برقرار نمایید.
        </p>
      </div>
    </div>
  )
}
