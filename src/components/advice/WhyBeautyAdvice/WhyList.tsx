import React, { FC, ReactElement } from 'react'
import { WhyItem } from '@/components/advice/WhyBeautyAdvice/WhyItem'
import { Headset, CheckCircle, CreditCard } from 'react-bootstrap-icons'

export const WhyList: FC = (): ReactElement => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md border grid grid-cols-3 gap-5 mt-4">
      <WhyItem
        title="رایگان"
        subtitle="هزینه مشاوره برای شما رایگان است و زحمت حضور در صف های طولانی نوبت و هزینه رفت و آمد را ندارید"
      >
        <Headset className="w-20 h-20 text-pink-500 bg-pink-100 p-4 shrink-0 rounded-md" />
      </WhyItem>
      <WhyItem
        title="مرجع تخصصی نقد و بررسی محصولات"
        subtitle="مرجع فروش محصولات اصل خارجی و ایرانی با 25سال سابقه"
      >
        <CheckCircle className="w-20 h-20 text-amber-500 bg-amber-100 p-4 shrink-0 rounded-md" />
      </WhyItem>
      <WhyItem
        title="مشاوره با کارشناسان مجرب"
        subtitle="کارشناسان ما تا دریافت کامل پاسخ، شما را همراهی میکند"
      >
        <CreditCard className="w-20 h-20 text-teal-500 bg-teal-100 p-4 shrink-0 rounded-md" />
      </WhyItem>
    </div>
  )
}
