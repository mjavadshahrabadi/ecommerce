import React, { FC, ReactElement } from 'react'
import { PatchCheck, Truck, CashCoin, Headset } from 'react-bootstrap-icons'
import { BenefitsItem } from '@/components/home/Benefits/BenefitsItem'

export const Benefits: FC = (): ReactElement => {
  return (
    <ul
      className="mt-5 lg:mt-8 max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4 items-center justify-between px-4 2xl:px-0"
      dir="rtl"
    >
      <BenefitsItem title="ضمانت اصالت کالا" subtitle="ضمانت اصالت کالا">
        <PatchCheck className="text-primary w-8 h-8 group-hover:text-white duration-300 ease-out" />
      </BenefitsItem>

      <BenefitsItem
        title="ارسال رایگان بالای ۵۰۰,۰۰۰ تومان"
        subtitle="برای سراسر کشور"
      >
        <Truck className="text-primary w-8 h-8 group-hover:text-white duration-300 ease-out" />
      </BenefitsItem>

      <BenefitsItem title="بازگشت کالا" subtitle="ضمانت بازگشت کالا تا 7 روز">
        <CashCoin className="text-primary w-8 h-8 group-hover:text-white duration-300 ease-out" />
      </BenefitsItem>

      <BenefitsItem title="مشاوره" subtitle="مشاوره پوست و زیبایی">
        <Headset className="text-primary w-8 h-8 group-hover:text-white duration-300 ease-out" />
      </BenefitsItem>
    </ul>
  )
}
