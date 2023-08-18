import React, { FC, ReactElement } from 'react'
import Image from 'next/image'

interface OffersItemProps {
  imgSrc: string
  title: string
}
export const OffersItem: FC<OffersItemProps> = ({
  imgSrc,
  title,
}): ReactElement => {
  return (
    <li className="cursor-pointer mt-8">
      <Image
        src={imgSrc}
        alt={title}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto rounded-md"
      />
    </li>
  )
}
