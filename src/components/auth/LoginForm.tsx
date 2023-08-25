'use client'
import React, { FC, ReactElement, useState } from 'react'

export const LoginForm: FC = (): ReactElement => {
  const [loginWithStaticPassword, setLoginWithStaticPassword] = useState(false)
  const handleFormType = (): void => {
    setLoginWithStaticPassword((prev) => !prev)
  }
  return (
    <form className="flex flex-col items-center justify-center w-full h-screen">
      {loginWithStaticPassword ? (
        <div className="flex flex-col items-end space-y-6">
          <h4 className="text-gray-800 text-lg font-semibold flex items-end">
            :) سلام روژایی عزیز
          </h4>
          <div className="flex flex-col space-y-3 items-end">
            <label htmlFor="phone" className="text-gray-600 text-[15px]">
              لطفا شماره تماس خود را وارد نمایید
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="p-2 bg-gray-100 text-[14px] text-gray-600 focus:outline-0 w-[400px] rounded-md focus:ring-2 ring-primary duration-300 ease-out text-right"
              placeholder="۰۹۱۲۱۲۳۴۵۶۷"
            />
          </div>

          <div className="flex flex-col space-y-4 items-center justify-center w-full">
            <button
              type="button"
              className="w-full bg-primary text-white p-3 rounded-md hover:shadow-sm active:scale-95"
            >
              ادامه
            </button>

            <button
              type="button"
              onClick={handleFormType}
              className="bg-white border border-gray-800 text-gray-800 hover:bg-black hover:text-white hover:border-black p-2 rounded-md w-fit text-[14px] duration-300 ease-out"
            >
              ورود با رمز عبور ثابت
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-end space-y-6">
          <h4 className="text-gray-800 text-lg font-semibold flex items-end">
            ورود با رمز عبور ثابت
          </h4>
          <div className="flex flex-col space-y-3 items-end">
            <label htmlFor="phone" className="text-gray-600 text-[15px]">
              موبایل خود را وارد کنید
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="p-2 bg-gray-100 text-[14px] text-gray-600 focus:outline-0 w-[400px] rounded-md focus:ring-2 ring-primary duration-300 ease-out text-right"
              placeholder="۰۹۱۲۱۲۳۴۵۶۷"
            />
          </div>
          <div className="flex flex-col space-y-3 items-end">
            <label htmlFor="password" className="text-gray-600 text-[15px]">
              رمز عبور خود را وارد کنید
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="p-2 bg-gray-100 text-[14px] text-gray-600 focus:outline-0 w-[400px] rounded-md focus:ring-2 ring-primary duration-300 ease-out text-right"
              placeholder="********"
            />
          </div>
          <div className="flex flex-col space-y-6 items-center justify-center w-full">
            <button
              type="button"
              className="w-full bg-primary text-white p-3 rounded-md hover:shadow-sm active:scale-95"
            >
              ورود به حساب
            </button>

            <button
              type="button"
              onClick={handleFormType}
              className="bg-white border border-gray-800 text-gray-800 hover:bg-black hover:text-white hover:border-black p-2 rounded-md w-fit text-[14px] duration-300 ease-out"
            >
              ورود / ثبت نام با رمز یک بار مصرف
            </button>
          </div>
        </div>
      )}
    </form>
  )
}
