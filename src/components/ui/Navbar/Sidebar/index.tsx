import React, { FC, ReactElement } from 'react'
import { XLg } from 'react-bootstrap-icons'

interface SidebarProps {
  isSidebarOpen: boolean
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Sidebar: FC<SidebarProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  return (
    <aside className="block lg:hidden">
      <nav
        className={`top-0 right-0 w-[60vw] lg:w-[35vw] bg-white  px-2 py-20 space-y-4 fixed h-full z-40 ease-in-out duration-300 shadow-md ${
          isSidebarOpen ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
        {isSidebarOpen && (
          <button
            className="flex text-4xl items-center cursor-pointer fixed left-4 top-4 z-50 p-1 hover:bg-gray-200 hover:text-gray-800 rounded-md duration-200 ease-out"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <XLg className="w-7 h-7 text-gray-600" />
          </button>
        )}
      </nav>
    </aside>
  )
}
