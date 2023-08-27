import React, { FC, ReactElement } from 'react'

interface NavLinksItemProps {
  title: string
  srcUrl?: string
}

export const NavLinksItem: FC<NavLinksItemProps> = ({
  title,
}): ReactElement => {
  return (
    <li className="p-2 rounded-md text-gray-700 text-[15px] hover:bg-primary hover:text-white cursor-pointer transition-all duration-200 ease-out">
      {title}
    </li>
  )
}
