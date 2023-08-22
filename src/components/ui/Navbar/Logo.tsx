import React, { FC, ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'
export const Logo: FC = (): ReactElement => {
  return (
    <Link
      href="/"
      className="relative w-[73px] h-[23px] lg:w-[110px] lg:h-[30px]"
    >
      <Image alt="company-logo" src="/img/brand/logo.png" fill sizes="100vw" />
    </Link>
  )
}
