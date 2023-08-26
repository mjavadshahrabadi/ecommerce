import React, { FC, ReactElement } from 'react'
import Image from 'next/image'

export const CartContainer: FC = (): ReactElement => {
  return (
    <div className="max-w-8xl mx-auto flex items-center justify-center py-14 rounded-md shadow-sm bg-gray-100 mt-8 lg:mt-10 mb-5 lg:mb-0">
      <div className="flex flex-col space-y-2 items-center">
        <Image
          src="/cart/empty-cart.png"
          alt="emoty-cart"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[300px] lg:w-[300px] h-auto"
        />
        <h3 className="text-gray-700 text-lg font-semibold">
          !سبد خرید شما خالی است
        </h3>
        <h4 className="text-[14px] text-gray-500">
          :می توانید برای مشاهده محصولات به صفحات زیر بروید
        </h4>

        <div className="flex items-center space-x-4">
          <button
            className="text-[15px] text-primary font-semibold py-3 px-4 hover:bg-primary rounded-md hover:text-white duration-300 ease-out"
            type="button"
          >
            پیشنهاد روژایی
          </button>
          <button
            className="text-[15px] text-primary font-semibold py-3 px-4 hover:bg-primary rounded-md hover:text-white duration-300 ease-out"
            type="button"
          >
            پرفروش ترین ها
          </button>
        </div>
      </div>
    </div>
  )
}
