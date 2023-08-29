import React, { FC, ReactElement } from 'react'

interface ShopBranchesItem {
  name: string
  phoneNumbers: string[]
  atWorkTime: string
}

export const ShopBranchesItem: FC<ShopBranchesItem> = ({
  atWorkTime,
  phoneNumbers,
  name,
}): ReactElement => {
  return (
    <div className="p-4 bg-gray-200 rounded-md shadow-md text-gray-600 text-[14px] flex flex-col space-y-3">
      <div className="flex items-center justify-between" dir="rtl">
        <span>{name}</span>
        <div className="flex flex-col space-y-1">
          {phoneNumbers && phoneNumbers.map((phone) => <span>{phone}</span>)}
        </div>
      </div>
      <p className="text-center">{atWorkTime}</p>
      <button
        type="button"
        className="text-[13px] hover:text-primary duration-300 ease-out"
      >
        مشاهده جزییات شعبه
      </button>
    </div>
  )
}
