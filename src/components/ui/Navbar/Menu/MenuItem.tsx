import React, { FC, ReactElement } from 'react'

interface MenuItemProps {
  title: string
  children: React.ReactNode
  link?: string
}

export const MenuItem: FC<MenuItemProps> = ({
  title,
  children,
  link,
}): ReactElement => {
  return (
    <li className="group flex items-center cursor-pointer space-x-2">
      <h5 className="text-gray-600 text-[12px] group-hover:text-primary duration-300 ease-out">
        {title}
      </h5>
      {children}
    </li>
  )
}
