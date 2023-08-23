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
    <li className="flex flex-col lg:flex-row items-center justify-center">
      <div className="border p-4 rounded-md group hover:bg-primary hover:border-primary cursor-pointer duration-300 ease-out ml-2">
        {children}
      </div>
      <div className="flex flex-col space-y-1 my-4">
        <h3 className="text-gray-800 font-semibold text-[14px] text-center lg:text-right">
          {title}
        </h3>
        <h5 className="text-gray-400 text-[12px] font-semibold text-center lg:text-right">
          {subtitle}
        </h5>
      </div>
    </li>
  )
}
