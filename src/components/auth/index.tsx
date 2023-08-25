import React, { FC, ReactElement } from 'react'
import Image from 'next/image'
import { LoginForm } from '@/components/auth/LoginForm'
import { ReturnBtn } from '@/components/auth/ReturnBtn'

export const AuthSection: FC = (): ReactElement => {
  return (
    <div className="grid grid-cols-5 w-full h-screen relative">
      <div className="w-full h-full col-span-2">
        <Image
          src="/auth/login.jpg"
          alt="auth-login"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
      <div className="w-full h-full col-span-3">
        <LoginForm />
      </div>
      <ReturnBtn />
    </div>
  )
}
