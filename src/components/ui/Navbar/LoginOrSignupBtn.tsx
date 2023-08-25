import React, { FC, ReactElement } from 'react'
import Link from 'next/link'

export const LoginOrSignupBtn: FC = (): ReactElement => {
  return (
    <Link href="/auth" className="hidden lg:block">
      <button
        className="w-fit p-2 text-gray-600 text-[14px] border rounded-md hover:border-primary hover:text-white hover:bg-primary duration-200 ease-out font-semibold focus:scale-90"
        type="button"
      >
        ورود / عضویت
      </button>
    </Link>
  )
}
