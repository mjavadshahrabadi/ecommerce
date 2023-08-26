import React, { FC, ReactElement } from 'react'
import { ServiceTypeItem } from '@/components/advice/ServiceType/ServiceTypeItem'

export const ServiceType: FC = (): ReactElement => {
  return (
    <div className="max-w-5xl mx-auto px-4 2xl:px-0 mt-14 flex flex-col space-y-8">
      <h4 className="text-gray-700 font-semibold text-2xl text-center">
        چه خدماتی به شما ارائه می دهیم؟
      </h4>
      <div className="grid grid-cols-4 gap-5">
        <ServiceTypeItem
          imgSrc="/advice/services/img-1.png"
          title="مشاوره تصویری"
        />
        <ServiceTypeItem
          imgSrc="/advice/services/img-2.png"
          title="مشاوره صوتی"
        />
        <ServiceTypeItem
          imgSrc="/advice/services/img-3.png"
          title="مشاوره متنی"
        />
        <ServiceTypeItem
          imgSrc="/advice/services/img-4.png"
          title="نوبت دهی آنلاین"
        />
      </div>
    </div>
  )
}
