import React, { FC, ReactElement } from 'react'
import { List, ListUl } from 'react-bootstrap-icons'
import { orderByData } from '@/constants/orderby'

export const OrderBy: FC = (): ReactElement => {
  return (
    <div className="hidden lg:flex flex-row-reverse items-center justify-start space-x-4">
      <div className="flex items-center ml-4">
        <h4 className="text-sm text-gray-800 font-semibold mr-2">: به ترتیب</h4>
        <ListUl className="w-5 h-5 text-gray-600" />
      </div>

      <div className="flex items-center space-x-4">
        {orderByData &&
          orderByData.map((item) => (
            <div
              key={item.id}
              className="text-[13px] text-gray-700 cursor-pointer hover:text-primary duration-300 ease-out"
            >
              {item.title}
            </div>
          ))}
      </div>
    </div>
  )
}
