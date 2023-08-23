import React, { FC, ReactElement, useState } from 'react'
import { ChevronDown } from 'react-bootstrap-icons'
import { set } from 'zod'
import { Simulate } from 'react-dom/test-utils'
import drop = Simulate.drop

interface DropList {
  title: string
  dropListItems: string[]
}

export const DropList: FC<DropList> = ({
  title,
  dropListItems,
}): ReactElement => {
  const [isExpand, setISExpand] = useState(false)
  return (
    <div>
      <div
        className="flex items-center justify-between hover:bg-gray-100 duration-300 ease-out cursor-pointer px-4"
        onClick={() => setISExpand((prev) => !prev)}
      >
        <h4 className="text-gray-800 text-[15px] py-3  border-t border-gray-200 w-full">
          {title}
        </h4>
        <ChevronDown
          className={`w-4 h-4 text-gray-700 ${
            isExpand ? 'rotate-180' : ''
          } duration-300 ease-out`}
        />
      </div>

      {isExpand && (
        <ul className="flex flex-col space-y-2">
          {dropListItems &&
            dropListItems.map((item, _i) => (
              <li
                key={_i + Math.random()}
                className=" text-gray-600 text-[14px] px-4 py-2 hover:bg-gray-100 duration-300 ease-out cursor-pointer rounded-md"
              >
                {item}
              </li>
            ))}
        </ul>
      )}
    </div>
  )
}
