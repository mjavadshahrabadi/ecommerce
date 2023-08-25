import React, { FC, ReactElement } from 'react'
import { ChevronRight } from 'react-bootstrap-icons'
import Link from 'next/link'

export const ReturnBtn: FC = (): ReactElement => {
  return (
    <Link href="/">
      <button
        type="button"
        className="text-[14px] absolute top-5 right-3 lg:right-5 border p-2 border-transparent lg:border-gray-800 rounded-md duration-300 ease-out flex items-center bg-white text-gray-800 hover:bg-gray-800 hover:text-white group"
      >
        بازگشت
        <i>
          <ChevronRight className="ml-1 w-4 h-4 text-gray-800 group-hover:text-white duration-300 ease-out" />
        </i>
      </button>
    </Link>
  )
}
