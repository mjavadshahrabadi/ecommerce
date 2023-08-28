import React, { FC, ReactElement } from 'react'
import { XLg } from 'react-bootstrap-icons'
import Image from 'next/image'

interface SidebarProps {
  isSidebarOpen: boolean
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const BlogSidebar: FC<SidebarProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
}): ReactElement => {
  return (
    <aside
      className={`lg:hidden top-0 right-0 w-[100%] lg:w-[35vw] bg-white  px-2 py-5 space-y-4 fixed h-full z-40 ease-in-out duration-300 shadow-md overflow-x-hidden ${
        isSidebarOpen ? 'translate-x-0 ' : 'translate-x-full'
      }`}
    >
      <nav>
        {isSidebarOpen && (
          <div className="flex items-center justify-between px-1 mb-4">
            <button
              className="text-4xl cursor-pointer p-1 hover:bg-gray-200 hover:text-gray-800 rounded-md duration-200 ease-out"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <XLg className="w-6 h-6 text-gray-600" />
            </button>
            <div className="w-[70px] h-[20px] relative">
              <Image
                src="/img/brand/logo.png"
                alt="rozha-logo"
                fill
                sizes="100vw"
              />
            </div>
          </div>
        )}

        <ul className="flex flex-col mt-8">
          <li className="text-gray-700 text-[15px] hover:bg-gray-100 p-3 rounded-md cursor-pointer duration-300 ease-out">
            آرایشی و زیبایی
          </li>
          <li className="text-gray-700 text-[15px] hover:bg-gray-100 p-3 rounded-md cursor-pointer duration-300 ease-out">
            پوست
          </li>
          <li className="text-gray-700 text-[15px] hover:bg-gray-100 p-3 rounded-md cursor-pointer duration-300 ease-out">
            عطر
          </li>
          <li className="text-gray-700 text-[15px] hover:bg-gray-100 p-3 rounded-md cursor-pointer duration-300 ease-out">
            مو
          </li>
          <li className="text-gray-700 text-[15px] hover:bg-gray-100 p-3 rounded-md cursor-pointer duration-300 ease-out">
            ناخن
          </li>
          <li className="text-gray-700 text-[15px] hover:bg-gray-100 p-3 rounded-md cursor-pointer duration-300 ease-out">
            مژه و ابرو
          </li>
          <li className="text-gray-700 text-[15px] hover:bg-gray-100 p-3 rounded-md cursor-pointer duration-300 ease-out">
            مراقبت و سلامتی
          </li>
        </ul>
      </nav>
    </aside>
  )
}
