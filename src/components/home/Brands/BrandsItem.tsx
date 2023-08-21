'use client'
import React, { FC, ReactElement } from 'react'
import Image from 'next/image'

interface BrandsItemProps {
  title: string
  imgSrc: string
}
export const BrandsItem: FC<BrandsItemProps> = ({
  imgSrc,
  title,
}): ReactElement => {
  return (
    <div className="w-[75px] h-[75px] relative">
      <Image
        src={imgSrc}
        alt={title}
        width={100}
        height={100}
        sizes="100vw"
        title={title}
      />
    </div>
  )
}
