import React, { FC, ReactElement } from 'react'
import { CartTypesList } from '@/components/customerClub/CartTypesList'
import { CardTypeDescriptionList } from '@/components/customerClub/CardTypeDescriptionList'

export const CustomerClubSection: FC = (): ReactElement => {
  return (
    <>
      <div className="relative w-full h-1 border-t-2 border-gray-300 z-10 flex items-center justify-center">
        <h4 className="absolute -top-4 rounded-md z-20 w-fit bg-gray-50 px-4 text-primary font-semibold">
          باشگاه مشتریان روژا
        </h4>
      </div>
      <CartTypesList />
      <CardTypeDescriptionList />

      <div className="flex items-center justify-center">
        <button
          type="button"
          className="flex items-center justify-center w-fit py-2 px-4 bg-primary rounded-md text-white text-[15px] font-semibold hover:shadow-md active:scale-95  mt-5 transition-all duration-300 ease-out"
        >
          الان خرید کن
        </button>
      </div>
    </>
  )
}
