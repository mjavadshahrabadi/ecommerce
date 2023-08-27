import React, { FC, ReactElement } from 'react'
import Image from 'next/image'
import { ServiceRequestForm } from '@/components/organizationalSales/ServiceRequestForm'

export const OrganizationalSalesSection: FC = (): ReactElement => {
  return (
    <div className="max-w-8xl mx-auto px-4 2xl:px-0 mt-10 mb-20">
      <div className="relative w-full h-1 border-t-2 border-gray-300 z-10 flex items-center justify-center">
        <h4 className="absolute -top-4 rounded-md z-20 w-fit bg-gray-50 px-4 text-gray-700 font-semibold">
          فروش سازمانی روژا
        </h4>
      </div>
      <div className="w-full bg-white shadow-md border rounded-2xl mt-8 overflow-hidden">
        <Image
          src="/organization-sales/organization_banner.jpg"
          alt="oraganization_banner"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-[100px] lg:h-auto"
        />
        <div className="flex flex-col space-y-5 items-end p-5 lg:p-10">
          <p className="text-sm text-graty-700 text-right">
            مجموعه فروشگاههای روژا آماده همكاری با شركت ها و سازمان ها در زمينه
            فروش سازمانی با شرايط ويژه ميباشد
          </p>
          <h3 className="text-gray-700 font-semibold">کارت هدیه</h3>
          <ul
            className="flex flex-col items-start justify-center space-y-2 mr-10 list-disc"
            dir="rtl"
          >
            <li className="text-sm text-gray-600">مبالغ مورد نظر شما</li>
            <li className="text-sm text-gray-600">طرح و لوگوی مورد نظر شما</li>
          </ul>
          <h3 className="text-gray-700 font-semibold">محصولات منتخب</h3>
          <ul
            className="flex flex-col items-start justify-center space-y-2 mr-10 list-disc"
            dir="rtl"
          >
            <li className="text-sm text-gray-600">متناسب با بودجه شما</li>
          </ul>

          <p className="text-gray-700 text-sm text-right">
            خواهشمند است در صورت تمايل با شماره{' '}
            <span className="text-primary font-semibold">۰۲۱-۱۲۳۲۱۳۲۱۳۱</span> و
            داخلی ۱۱۰ و یا شماره همراه{' '}
            <span className="text-primary font-semibold">۰۹۱۲۱۲۳۴۵۶۷</span> تماس
            بگيريد يا اطلاعات تماس خود را وارد كنيد تا در اسرع وقت با شما تماس
            گرفته شود
          </p>
        </div>
      </div>
      <ServiceRequestForm />
    </div>
  )
}
