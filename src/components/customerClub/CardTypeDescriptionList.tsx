import React, { FC, ReactElement } from 'react'
import Image from 'next/image'

export const CardTypeDescriptionList: FC = (): ReactElement => {
  return (
    <ul className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
      <li className="rounded-md overflow-hidden shadow-md bg-white">
        <Image
          src="/customer-club/img-4.jpg"
          alt="img-4"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />

        <div className="p-4">
          <p className="text-[14px] text-gray-600 text-right">
            شما با اولین خرید بالای 1.000.000 تومان کارت اشتراک نقره ای دریافت
            می کنید. با کارت نقره ای روژا 5% از مبلغ خرید شما به عنوان اعتبار
            هدیه برای خریدهای بعدی به حساب کارت عضویت شما واریز خواهد شد که در
            هفته تولد 10%؜ می باشد. اگر مجموع خرید شما در مدت 1 سال به مبلغ
            8.000.000 تومان رسیده باشد عضویت شما به طلایی ارتقا خواهد یافت و
            برای شما کارت جدید صادر می شود
          </p>
        </div>
      </li>
      <li className="rounded-md overflow-hidden shadow-md bg-white">
        <Image
          src="/customer-club/img-5.jpg"
          alt="img-5"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
        <div className="p-4">
          <p className="text-[14px] text-gray-600 text-right">
            %8 از مبلغ خرید شما به عنوان اعتبار هدیه برای خریدهای بعدی به حساب
            کارت عضویت شما واریز خواهد شد که در هفته تولد، 12% می باشد. اگر
            مجموع خرید شما در مدت 1 سال به مبلغ 20.000.000 تومان رسیده باشد
            عضویت شما به پلاتینیوم ارتقا خواهد یافت و برای شما کارت جدید صادر می
            شود
          </p>
        </div>
      </li>
      <li className="rounded-md overflow-hidden shadow-md bg-white">
        <Image
          src="/customer-club/img-6.jpg"
          alt="img-6"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
        <div className="p-4">
          <p className="text-[14px] text-gray-600 text-right">
            با کارت پلاتینیوم روژا 12% از مبلغ خرید شما به عنوان اعتبار هدیه
            برای خریدهای بعدی به حساب کارت عضویت شما واریز خواهد شد که در هفته
            تولد، 15% می باشد
          </p>
        </div>
      </li>
    </ul>
  )
}
