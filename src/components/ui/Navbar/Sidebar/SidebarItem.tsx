import React, { FC, ReactElement } from 'react'
import { DropList } from '@/components/ui/Navbar/Sidebar/DropList'

interface SidebarItemProps {
  title: string
  type: 'single' | 'list'
  listData?: string[]
}

export const SidebarItem: FC<SidebarItemProps> = ({
  title,
  type,
  listData,
}): ReactElement | null => {
  if (type === 'single') {
    return (
      <li className=" rounded-md text-gray-800 duration-300 ease-out hover:bg-gray-100">
        <h4 className="cursor-pointer w-full py-3 px-4 border-t border-gray-200 text-[15px]">
          {title}
        </h4>
      </li>
    )
  }

  if (type === 'list') {
    return <DropList title={title} dropListItems={listData || []} />
  }

  return null
}
