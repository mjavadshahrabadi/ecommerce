import React, { FC, ReactElement } from 'react'
import { List, XLg } from 'react-bootstrap-icons'

interface ToggleMenu {
  isSidebarOpen: boolean
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export const ToggleMenu: FC<ToggleMenu> = ({
  setIsSidebarOpen,
  isSidebarOpen,
}): ReactElement => {
  return (
    <i onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
      <List className="w-8 h-8 text-gray-700 cursor-pointer" />
    </i>
  )
}
