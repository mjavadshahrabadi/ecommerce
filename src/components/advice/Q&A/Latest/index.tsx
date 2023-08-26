import React, { FC, ReactElement } from 'react'
import { LatestItem } from '@/components/advice/Q&A/Latest/LatestItem'

export const Latest: FC = (): ReactElement => {
  return (
    <div className="flex flex-col space-y-4" dir="rtl">
      <h4 className="text-gray-800 font-semibold">آخرین ها:</h4>
      <ul className="flex flex-col">
        <LatestItem
          title="معرفی محصول برای موی خشک و دارای شوره"
          description="معرفی محصول برای موی خشک و دارای شوره معرفی محصول برای موی خشک و دارای شوره"
          publishDate="یک ساعت پیش"
        />
        <LatestItem
          title="معرفی محصول برای موی خشک و دارای شوره"
          description="معرفی محصول برای موی خشک و دارای شوره معرفی محصول برای موی خشک و دارای شوره"
          publishDate="یک ساعت پیش"
        />
        <LatestItem
          title="معرفی محصول برای موی خشک و دارای شوره"
          description="معرفی محصول برای موی خشک و دارای شوره معرفی محصول برای موی خشک و دارای شوره"
          publishDate="یک ساعت پیش"
        />
        <LatestItem
          title="معرفی محصول برای موی خشک و دارای شوره"
          description="معرفی محصول برای موی خشک و دارای شوره معرفی محصول برای موی خشک و دارای شوره"
          publishDate="یک ساعت پیش"
        />
        <LatestItem
          title="معرفی محصول برای موی خشک و دارای شوره"
          description="معرفی محصول برای موی خشک و دارای شوره معرفی محصول برای موی خشک و دارای شوره"
          publishDate="یک ساعت پیش"
        />
        <LatestItem
          title="معرفی محصول برای موی خشک و دارای شوره"
          description="معرفی محصول برای موی خشک و دارای شوره معرفی محصول برای موی خشک و دارای شوره"
          publishDate="یک ساعت پیش"
        />
        <LatestItem
          title="معرفی محصول برای موی خشک و دارای شوره"
          description="معرفی محصول برای موی خشک و دارای شوره معرفی محصول برای موی خشک و دارای شوره"
          publishDate="یک ساعت پیش"
        />
      </ul>
    </div>
  )
}
