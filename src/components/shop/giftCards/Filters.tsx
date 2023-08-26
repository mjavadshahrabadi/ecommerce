'use client'
import React, { FC, ReactElement, useState } from 'react'
import Accordion from '@/components/ui/Accordion'
import { ToggleSwitch } from '@/components/ui/ToggleSwitch'
import { FilterSwitchItem } from '@/components/shop/giftCards/FilterSwitchItem'
import { PriceRangeFilterSelect } from '@/components/shop/giftCards/PriceRangeFilterSelect'

export const Filters: FC = (): ReactElement => {
  const [availableProducts, setAvailableProducts] = useState(false)

  return (
    <div
      className="flex flex-col space-y-4 px-2 bg-white py-4 rounded-md"
      dir="rtl"
    >
      <h3 className="text-gray-700 font-semibold mb-4">کارت های هدیه</h3>
      <Accordion datas={{ question: 'دسته بندی ها' }}>
        <h4 className="text-sm text-gray-600">کارت های هدیه</h4>
      </Accordion>
      <Accordion datas={{ question: 'برند ها' }}>
        <div className="flex flex-col space-y-4">
          <input
            className="p-2 focus:outline-0 bg-gray-100 rounded-md text-gray-600 text-sm"
            placeholder="جستجو برند ها"
            type="text"
            id="brandFilter"
            name="brandFilter"
          />
          <div className="flex flex-col space-y-3">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="rozha"
                id="rozha"
                className="w-4 h-4 ml-2 rounded-md cursor-pointer ring-indigo-500"
              />
              <label
                htmlFor="rozha"
                className="text-sm text-gray-600 cursor-pointer"
              >
                روژا
              </label>
            </div>
          </div>
        </div>
      </Accordion>
      <FilterSwitchItem title="کالاهای موجود" />
      <FilterSwitchItem title="تخفیف دار" />
      <FilterSwitchItem title="زود مصرف" />

      <Accordion datas={{ question: 'تعیین محدوده قیمت' }}>
        <PriceRangeFilterSelect />
      </Accordion>
    </div>
  )
}
