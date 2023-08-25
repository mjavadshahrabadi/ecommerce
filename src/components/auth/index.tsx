import React, { FC, ReactElement } from 'react'
import Image from 'next/image'
import { LoginForm } from '@/components/auth/LoginForm'
import { ReturnBtn } from '@/components/auth/ReturnBtn'

export const AuthSection: FC = (): ReactElement => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-5 w-full h-screen relative overflow-y-scroll overflow-x-hidden">
      <div className="w-full h-full lg:col-span-2">
        <Image
          src="/auth/login.jpg"
          alt="auth-login"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
          objectFit="cover"
        />
      </div>
      <div className="w-full h-full lg:col-span-3">
        <LoginForm />
      </div>
      <ReturnBtn />
    </section>
  )
}
