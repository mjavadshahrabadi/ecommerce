import React, { FC, ReactElement } from 'react'
import Image from 'next/image'

interface WhyItemProps {
  children: React.ReactNode
  title: string
  subtitle: string
}

export const WhyItem: FC<WhyItemProps> = ({
  title,
  children,
  subtitle,
}): ReactElement => {
  return (
    <div className="flex items-center">
      {children}
      <div className="flex flex-col space-y-2 mr-2">
        <span className="text-sm text-gray-700 font-semibold">{title}</span>
        <span className="text-sm text-gray-500">{subtitle}</span>
      </div>
      <h3></h3>
    </div>
  )
}
