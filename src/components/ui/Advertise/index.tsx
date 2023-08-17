import React, { FC, ReactElement } from 'react'
import Image from 'next/image'

interface AdvertiseProps {
  src: [string, string]
}

export const Advertise: FC<AdvertiseProps> = ({ src }): ReactElement => {
  return (
    <>
      <Image
        alt="advertise"
        src={src[0]}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto hidden md:block"
      />
      <Image
        alt="advertise-mobile"
        src={src[1]}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto block md:hidden"
      />
    </>
  )
}
