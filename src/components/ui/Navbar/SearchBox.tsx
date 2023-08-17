import React, { FC, ReactElement } from 'react'
import { Search } from 'react-bootstrap-icons'

export const SearchBox: FC = (): ReactElement => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        name="searchbox"
        id="searchbox"
        className="relative text-gray-600 text-[13px] rounded-md p-2 bg-gray-100 focus:outline-0 w-full text-right "
        placeholder="...جستجوی نام محصول,دسته بندی و "
      />
      <Search className="w-4 h-4 text-gray-400 absolute left-2.5 bottom-2.5" />
    </div>
  )
}
