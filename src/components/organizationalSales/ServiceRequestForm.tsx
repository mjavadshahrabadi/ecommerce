import React, { FC, ReactElement } from 'react'
import {
  PersonFill,
  TelephoneFill,
  Phone,
  Building,
} from 'react-bootstrap-icons'

export const ServiceRequestForm: FC = (): ReactElement => {
  return (
    <form className="mt-10 flex items-center justify-center">
      <div
        className="bg-white border p-5 rounded-2xl shadow-md w-full md:w-2/3 lg:w-1/3"
        dir="rtl"
      >
        <h2 className="text-gray-700 font-semibold">
          فرم درخواست خدمات سازمانی
        </h2>
        <div className="flex flex-col space-y-3 my-4">
          <div className="relative">
            <PersonFill className="w-5 h-5 text-gray-500 absolute left-3 top-3" />
            <input
              placeholder="نام و نام خانوادگی"
              className="p-3 rounded-md text-gray-600 text-[14px] w-full bg-gray-100 focus:outline-primary"
              name="fullname"
              id="fullname"
              type="text"
            />
          </div>
          <div className="relative">
            <TelephoneFill className="w-5 h-5 text-gray-500 absolute left-3 top-3" />
            <input
              placeholder="شماره تلفن ثابت"
              className="p-3 rounded-md text-gray-600 text-[14px] w-full bg-gray-100 focus:outline-primary"
              name="static-phone-number"
              id="static-phone-number"
              type="text"
            />
          </div>
          <div className="relative">
            <Phone className="w-5 h-5 text-gray-500 absolute left-3 top-3" />
            <input
              placeholder="شماره تلفن همراه"
              className="p-3 rounded-md text-gray-600 text-[14px] w-full bg-gray-100 focus:outline-primary"
              name="phone"
              id="phone"
              type="text"
            />
          </div>
          <div className="relative">
            <Building className="w-5 h-5 text-gray-500 absolute left-3 top-3" />
            <input
              placeholder="نام شرکت یا سازمان"
              className="p-3 rounded-md text-gray-600 text-[14px] w-full bg-gray-100 focus:outline-primary"
              name="company-name"
              id="company-name"
              type="text"
            />
          </div>
        </div>

        <button
          type="button"
          className="w-full py-2 text-center rounded-md bg-primary text-white active:scale-95"
        >
          ارسال
        </button>
      </div>
    </form>
  )
}
