import React, { FC, ReactElement } from 'react'
import Image from 'next/image'

export const Advertise: FC = (): ReactElement => {
  return (
    <div className="max-w-8xl mx-auto grid grid-cols-2 grid-rows-1 mt-8 gap-4">
      <div>
        <Image
          src="/img/advertise/img-1.jpg"
          width={0}
          height={0}
          className="w-full h-auto rounded-md"
          sizes="100vw"
          alt="advertise-1"
        />
      </div>
      <div>
        <Image
          src="/img/advertise/img-2.jpg"
          width={0}
          height={0}
          className="w-full h-auto rounded-md"
          sizes="100vw"
          alt="advertise-2"
        />
      </div>
    </div>
  )
}
