import React, { FC, ReactElement } from 'react'
import Image from 'next/image'

interface AdvertiseProps {
  src: [string, string]
}

export const Advertise: FC<AdvertiseProps> = ({ src }): ReactElement => {
  return (
    <>
      <Image
        src={src[0]}
        alt="advertise"
        width={3400}
        height={300}
        className="hidden md:block"
        layout="responsive"
      />
      <Image
        src={src[1]}
        alt="advertise-mobile"
        width={1024}
        height={90}
        className="block md:hidden"
        layout="responsive"
      />
    </>
  )
}
