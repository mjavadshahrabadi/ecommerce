import React, { FC, ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'
export const Logo: FC = (): ReactElement => {
  return (
    <Link href="/">
      <Image
        alt="company-logo"
        src="/img/brand/logo.png"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto"
      />
    </Link>
  )
}
