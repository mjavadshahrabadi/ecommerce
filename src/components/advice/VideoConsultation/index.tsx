import React, { FC, ReactElement } from 'react'
import { StepByStepGuide } from '@/components/advice/VideoConsultation/StepByStepGuide'

export const VideoConsultation: FC = (): ReactElement => {
  return (
    <div
      className="max-w-5xl mt-8 lg:mt-14 mx-auto px-4 2xl:px-0 flex flex-col space-y-4"
      dir="rtl"
    >
      <h4 className="text-gray-700 text-lg lg:text-xl font-semibold">
        مشاوره تصویری
      </h4>
      <p className="text-[15px] text-gray-500">
        در مشاوره ویدئویی شما می توانید با رزرو وقت قبلی ، در ساعت مشخص وارد
        داشبورد شخصی خود در سایت شوید و از منو های سمت راست "وقت های مشاوره" را
        باز و وارد اتاق مشاوره شوید. کافیست با کلیک دکمه "میهمان" بتوانید با
        کارشناسان زیبایی روژا بصورت ویدئویی صحبت کنید.
      </p>
      <h4 className="text-gray-700 text-lg lg:text-xl font-semibold">
        مشاوره صوتی
      </h4>
      <p className="text-[15px] text-gray-500">
        در مشاوره ویدئویی شما می توانید با رزرو وقت قبلی ، در ساعت مشخص وارد
        داشبورد شخصی خود در سایت شوید و از منو های سمت راست "وقت های مشاوره" را
        باز و وارد اتاق مشاوره شوید. کافیست با کلیک دکمه "میهمان" بتوانید با
        کارشناسان زیبایی روژا بصورت صوتی صحبت کنید.
      </p>
    </div>
  )
}
