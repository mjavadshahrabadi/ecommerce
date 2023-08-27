import React, { FC, ReactElement } from 'react'

interface ChipProps {
  text: string
  children?: React.ReactNode
}
export const Chip: FC<ChipProps> = ({ children, text }): ReactElement => {
  return (
    <div className="lg:flex lg:items-center bg-pink-600 bg-opacity-90 border border-white rounded-md py-1 lg:py-2 px-2 lg:px-3 cursor-pointer">
      <span className="text-white text-[14px] lg:text-[15px]">{text}</span>
      {children && children}
    </div>
  )
}
