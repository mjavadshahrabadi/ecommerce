import React, { FC, ReactElement } from 'react'
import { Basket } from 'react-bootstrap-icons'

export const OrderBasket: FC = (): ReactElement => {
  return (
    <button type="button" className="bg-gray-100 rounded-md p-2.5 group">
      <Basket className="w-5 h-5 text-gray-700 group-hover:text-primary duration-200 ease-out" />
    </button>
  )
}
