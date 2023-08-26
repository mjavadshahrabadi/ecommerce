'use client'

import React, { FC, ReactElement } from 'react'

export const PriceRangeFilterSelect: FC = (): ReactElement => {
  return (
    <select
      defaultValue="default"
      className="mt-2 text-sm cursor-pointer focus:outline-0 border py-1 px-3 rounded-md bg-gray-100"
    >
      <option value="defalut" className="text-sm">
        انتخاب محدوده قیمت
      </option>
      <option value="از ۰ تا ۱۰۰.۰۰۰ تومان" className="text-sm cursor-pointer">
        از ۰ تا ۱۰۰.۰۰۰ تومان
      </option>
      <option
        value="از ۱۰۰.۰۰۰ تا ۲۰۰.۰۰۰ تومان"
        className="text-sm cursor-pointer"
      >
        از ۱۰۰.۰۰۰ تا ۲۰۰.۰۰۰ تومان
      </option>
      <option
        value="از ۲۰۰.۰۰۰ تومان تا ۵۰۰.۰۰۰ تومان"
        className="text-sm cursor-pointer"
      >
        از ۲۰۰.۰۰۰ تومان تا ۵۰۰.۰۰۰ تومان
      </option>
      <option
        value="از ۵۰۰.۰۰۰ تومان تا ۲.۰۰۰.۰۰۰ تومان"
        className="text-sm cursor-pointer"
      >
        از ۵۰۰.۰۰۰ تومان تا ۲.۰۰۰.۰۰۰ تومان
      </option>
    </select>
  )
}
