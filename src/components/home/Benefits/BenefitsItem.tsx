import React, { FC, ReactElement } from 'react'

interface BenefitsItemProps {
  title: string
  subtitle: string
  children: React.ReactNode
}

export const BenefitsItem: FC<BenefitsItemProps> = ({
  children,
  subtitle,
  title,
}): ReactElement => {
  return (
    <li className="flex items-center justify-between space-x-2">
      <div className="flex flex-col space-y-1 items-end">
        <h3 className="text-gray-800 font-semibold text-[14px]">{title}</h3>
        <h5 className="text-gray-400 text-[12px] font-semibold">{subtitle}</h5>
      </div>
      <div className="border p-4 rounded-md group hover:bg-primary hover:border-primary cursor-pointer duration-300 ease-out">
        {children}
      </div>
    </li>
  )
}
