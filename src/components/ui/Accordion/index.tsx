'use client'
import React, { FC, ReactElement, useState } from 'react'
import { ChevronDown } from 'react-bootstrap-icons'

interface AccordionProps {
  children: React.ReactNode
  datas: {
    question: string
    active?: number
  }
}
const Accordion: FC<AccordionProps> = ({ datas, children }): ReactElement => {
  const [data, setData] = useState(datas)

  const handleToggleActive = () => {
    let activeNew = data.active === 1 ? 0 : 1
    setData({ ...data, active: activeNew })
  }

  return (
    <div
      className={`flex flex-col  w-full pb-4 rounded-md mb-5 duration-500 group bg-white cursor-pointer border-b ${
        data.active === 1 ? 'is-active space-y-4' : ''
      }`}
    >
      <div className="flex items-center">
        <div
          className="w-full group-[.is-active]:font-bold flex items-center justify-between text-sm font-semibold"
          onClick={handleToggleActive}
        >
          {data.question}
          <i>
            <ChevronDown
              className={`w-4 h-4 text-gray-600 duration-500 ease-out ${
                data.active === 1 ? 'rotate-180' : ''
              }`}
            />
          </i>
        </div>
      </div>
      <div className="overflow-hidden duration-500 max-h-0 group-[.is-active]:max-h-[100px]">
        {children}
      </div>
    </div>
  )
}
export default Accordion
