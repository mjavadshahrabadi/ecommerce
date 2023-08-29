'use client'
import React, { FC, ReactElement, useState } from 'react'
import Link from 'next/link'
import { ViewList } from 'react-bootstrap-icons'

export const Modal: FC = (): ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(true)
  return (
    <>
      {isModalOpen && (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-4 2xl:px-0"
            dir="rtl"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <div className="flex items-center">
                    <ViewList className="w-5 h-5 text-gray-600" />
                    <h3 className="text-md lg:text-lg font-semibold text-gray-600 mr-1">
                      صفحات طراحی شده
                    </h3>
                  </div>
                </div>
                {/*body*/}
                <div
                  className="relative p-6 flex-auto md:w-[60vw] lg:w-[50vw] xl:w-[30vw] w-[90vw]"
                  dir="ltr"
                >
                  <ul className="flex flex-col space-y-3 text-[15px]">
                    <Link href="/">
                      <li className="text-gray-600 hover:text-primary duration-300 ease-out hover:line">
                        /
                      </li>
                    </Link>
                    <Link href="/shop/gift-cards">
                      <li className="text-gray-600 hover:text-primary duration-300 ease-out hover:line">
                        /shop/gift-cards
                      </li>
                    </Link>
                    <Link href="/organizational-sales">
                      <li className="text-gray-600 hover:text-primary duration-300 ease-out hover:line">
                        /organizational/sales
                      </li>
                    </Link>
                    <Link href="/onsales">
                      <li className="text-gray-600 hover:text-primary duration-300 ease-out hover:line">
                        /onsales
                      </li>
                    </Link>
                    <Link href="/advice">
                      <li className="text-gray-600 hover:text-primary duration-300 ease-out hover:line">
                        /advice
                      </li>
                    </Link>
                    <Link href="/branches">
                      <li className="text-gray-600 hover:text-primary duration-300 ease-out hover:line">
                        /branches
                      </li>
                    </Link>
                    <Link href="/cart">
                      <li className="text-gray-600 hover:text-primary duration-300 ease-out hover:line">
                        /cart
                      </li>
                    </Link>
                    <Link href="/customer-club">
                      <li className="text-gray-600 hover:text-primary duration-300 ease-out hover:line">
                        /customer-club
                      </li>
                    </Link>
                    <Link href="/blog">
                      <li className="text-gray-600 hover:text-primary duration-300 ease-out hover:line">
                        /blog
                      </li>
                    </Link>
                    <Link href="/auth">
                      <li className="text-gray-600 hover:text-primary duration-300 ease-out hover:line">
                        /auth
                      </li>
                    </Link>
                  </ul>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-primary border-2 hover:text-white hover:bg-primary border-primary rounded-md background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                  >
                    بستن
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-opacity-70 fixed inset-0 z-40 bg-black cursor-pointer" />
        </>
      )}
    </>
  )
}
